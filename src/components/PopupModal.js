"use client";

import React, { useEffect, useRef, useState } from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";

export default function PopupModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const phoneInputRef = useRef(null);
  const modalRef = useRef(null);
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

  // Initialize IntlTelInput on Component Mount
  useEffect(() => {
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

  // Validate Phone Number
  const validatePhoneNumber = () => {
    if (!itiRef.current) return false;

    if (!itiRef.current.isValidNumber()) {
      alert("Please enter a valid phone number.");
      return false;
    }
    return true;
  };

  // Handle Input Restriction: Only Numbers
  const handleNumberInput = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
  };

  // Form Submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!validatePhoneNumber()) return;

    const phoneNumber = itiRef.current.getNumber();
    const formData = new FormData(e.target);
    const values = Object.fromEntries(formData.entries());

    const formattedValues = {
      ...values,
      phone: phoneNumber,
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
        Book a Consultation
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
              <div className="flex px-1">
                <div className="w-1/2 px-2">
                  <label
                    htmlFor="name"
                    className="block text-white mb-2"
                  ></label>
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
                  <label
                    htmlFor="email"
                    className="block text-white mb-2"
                  ></label>
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
                <label
                  htmlFor="phone"
                  className="block text-white mb-2"
                ></label>
                <input
                  ref={phoneInputRef}
                  id="phone"
                  type="tel"
                  onInput={handleNumberInput}
                  className="w-full px-3 py-2 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#c0a062] bg-[#333333]"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="text-right px-3">
                <button
                  type="submit"
                  className="py-2 w-full bg-[#c0a062] text-white rounded-lg hover:bg-[#a89055] transition-all"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
