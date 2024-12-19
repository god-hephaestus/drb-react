"use client";

import React, { useRef, useState, useEffect } from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";

export default function OperationForm() {
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
  const itiRef = useRef(null);

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

  // Initialize IntlTelInput and Query Params on Component Mount
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
      console.log("Default Country Code: ", countryCode);

      itiRef.current = intlTelInput(phoneInputRef.current, {
        initialCountry: countryCode,
        separateDialCode: true,
        utilsScript:
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
      });

      console.log("IntlTelInput Initialized: ", itiRef.current);
    };

    initializeIntlTelInput();
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

    console.log("Raw Phone Input Value: ", rawNumber);
    console.log("Selected Country Code: ", countryCode);

    const intlNumber = `+${countryCode}${rawNumber}`;

    console.log("Formatted International Number: ", intlNumber);

    // Validate based on intlNumber directly instead of itiRef.current.isValidNumber()
    if (!/^[+]?\d{10,15}$/.test(intlNumber)) {
      console.error("Invalid phone number format: ", intlNumber);
      return;
    }

    const formData = new FormData(e.target);
    const values = Object.fromEntries(formData.entries());

    const formattedValues = {
      ...values,
      type: "LND-Drb-React",
      phone: intlNumber,
      g_utm_source: queryParams.utm_source,
      g_utm_medium: queryParams.utm_medium,
      g_utm_campaign: queryParams.utm_campaign,
      g_utm_content: queryParams.utm_content,
      g_utm_term: queryParams.utm_term,
      g_utm_ad: queryParams.utm_ad,
      g_clid: queryParams.gclid,
    };

    console.log("Formatted Submission Data: ", formattedValues);

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
    <div className="flex justify-center items-center my-9">
      <div
        className="lg:w-1/2 max-w-[549px] h-[424px]"
        style={{ backgroundImage: "url('/formImg.webp')" }}
      ></div>
      <form
        id="op-form"
        onSubmit={handleFormSubmit}
        className="w-full op-form lg:w-1/2 max-w-lg bg-transparent p-6 rounded-lg shadow-md"
      >
        <h6 className="text-white text-lg mb-4">Zatražite ponudu!</h6>

        {Object.keys(queryParams).map((key) => (
          <input key={key} type="hidden" name={key} value={queryParams[key]} />
        ))}
        <input type="hidden" name="type" value="Reactlp" />
        <div className="mb-7">
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-3 py-2 border rounded-lg placeholder-black text-black"
            placeholder="Ime i prezime"
          />
        </div>

        <div className="mb-7">
          <input
            ref={phoneInputRef}
            id="phone"
            type="tel"
            className="w-full px-3 py-2 border rounded-lg placeholder-black text-black"
            placeholder="Enter your phone number"
          />
        </div>

        <div className="mb-7">
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2 border rounded-lg placeholder-black text-black"
            placeholder="Enter your email"
          />
        </div>

        <div className="text-right">
          <button
            type="submit"
            disabled={submitted}
            className={`px-6 py-2 text-white rounded-lg ${
              submitted ? "bg-gray-400" : "bg-[#c0a062]"
            }`}
          >
            {submitted ? "Submitting..." : "Pošalji zahtev"}
          </button>
        </div>
      </form>
    </div>
  );
}
