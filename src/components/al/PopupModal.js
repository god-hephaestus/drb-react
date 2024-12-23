"use client";

import React, { useEffect, useRef, useState } from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";

export default function PopupModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [queryParams, setQueryParams] = useState({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_content: "",
    utm_term: "",
    utm_ad: "",
    gclid: "",
  });
  const phoneInputRef = useRef(null);
  const modalRef = useRef(null);
  const itiRef = useRef(null);

  const timerReached = useRef(false);
  const scrolledEnough = useRef(false);

  const checkConditions = () => {
    if (timerReached.current && scrolledEnough.current) {
      setIsOpen(true);
    }
  };

  // Timer Logic
  useEffect(() => {
    const timer = setTimeout(() => {
      timerReached.current = true;
      checkConditions();
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / scrollHeight) * 100;

      if (scrollPercent > 50 && !scrolledEnough.current) {
        scrolledEnough.current = true;
        checkConditions();
      }
    }, 250);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fetch Country Code for Initial IntlTelInput Setup
  const fetchCountryCode = async () => {
    try {
      const response = await fetch("https://ipapi.co/json/");
      const data = await response.json();
      return data.country_code || "US";
    } catch (error) {
      console.error("Failed to fetch country, defaulting to US", error);
      return "US";
    }
  };

  // Initialize IntlTelInput and Query Params on Modal Open
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const newQueryParams = {
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_content: params.get("utm_content") || "",
      utm_term: params.get("utm_term") || "",
      utm_ad: params.get("utm_ad") || "",
      gclid: params.get("gclid") || "",
    };
    setQueryParams(newQueryParams);

    const initializeIntlTelInput = async () => {
      const countryCode = await fetchCountryCode();
      itiRef.current = intlTelInput(phoneInputRef.current, {
        initialCountry: countryCode,
        separateDialCode: true,
        utilsScript:
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
      });
    };

    if (isOpen) {
      initializeIntlTelInput();
    }
  }, [isOpen]);

  // Handle Click Outside to Close Modal
  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  // Handle Form Submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!itiRef.current) {
      console.error("IntlTelInput instance is not initialized.");
      return;
    }

    const rawNumber = phoneInputRef.current.value;
    const countryCode = itiRef.current.getSelectedCountryData().dialCode;

    const intlNumber = `+${countryCode}${rawNumber}`;

    if (!/^[+]?[0-9]{10,15}$/.test(intlNumber)) {
      console.error("Invalid phone number format: ", intlNumber);
      return;
    }

    const formData = new FormData(e.target);
    const values = Object.fromEntries(formData.entries());

    const formattedValues = {
      ...values,
      type: "Reactlp",
      phone: intlNumber,
      g_utm_source: queryParams.utm_source,
      g_utm_medium: queryParams.utm_medium,
      g_utm_campaign: queryParams.utm_campaign,
      g_utm_content: queryParams.utm_content,
      g_utm_term: queryParams.utm_term,
      g_utm_ad: queryParams.utm_ad,
      g_clid: queryParams.gclid,
    };

    setSubmitted(true);
    try {
      const response = await fetch(
        "https://lp.estetikinternational.com/en/thank-you-page-api",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formattedValues).toString(),
        }
      );

      if (response.ok) {
        window.location.href =
          "https://lp.estetikinternational.com/en/thank-you-page";
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitted(false);
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-900">
      <button
        className="px-6 py-2 text-white bg-[#c0a062] rounded-lg hover:bg-[#a89055] transition-all"
        onClick={() => setIsOpen(true)}
      >
        Rezervoni Konsultën Tuaj
      </button>

      {isOpen && (
        <div className="fixed z-[180] inset-0 flex justify-center items-center bg-[#151515] bg-opacity-70">
          <div
            ref={modalRef}
            className="popup-modal bg-[#000000] rounded-lg shadow-lg relative"
            style={{ width: "500px", height: "510px" }}
          >
            <div
              className="w-full h-[60%] bg-center bg-cover"
              style={{ backgroundImage: "url('/leadPopupB.webp')" }}
            ></div>

            <button
              className="absolute top-3 right-3 text-white hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              &#10005;
            </button>

            <form onSubmit={handleFormSubmit} className="space-y-4 p-4">
              {Object.keys(queryParams).map((key) => (
                <input
                  key={key}
                  type="hidden"
                  name={key}
                  value={queryParams[key]}
                />
              ))}
              <input type="hidden" name="type" value="Reactlp" />

              <div className="flex px-1">
                <div className="w-1/2 px-2">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 py-2 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#c0a062] bg-[#333333]"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="w-1/2 px-2">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#c0a062] bg-[#333333]"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="px-3">
                <input
                  ref={phoneInputRef}
                  id="phone"
                  type="tel"
                  className="w-full px-3 py-2 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#c0a062] bg-[#333333]"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="text-right px-3">
                <button
                  type="submit"
                  disabled={submitted}
                  className={`py-2 w-full rounded-lg transition-all ${
                    submitted
                      ? "bg-gray-400 text-gray-200"
                      : "bg-[#c0a062] text-white "
                  }`}
                >
                  {submitted ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// Debounce Helper
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}
