"use client";

import React, { useEffect, useState } from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";

export default function PhoneInputModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [iti, setIti] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const phoneInputRef = React.useRef(null);

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

  useEffect(() => {
    if (isOpen) {
      const initializeIntlTelInput = async () => {
        const countryCode = await fetchCountryCode();
        const input = phoneInputRef.current;

        const itiInstance = intlTelInput(input, {
          initialCountry: countryCode,
          separateDialCode: true,
          utilsScript:
            "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
        });

        setIti(itiInstance);
      };

      initializeIntlTelInput();
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (iti) {
      const fullNumber = iti.getNumber();
      console.log("Full Phone Number:", fullNumber);
      setPhoneNumber(fullNumber);
      setIsOpen(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        className="px-5 py-3 text-white bg-[#c0a062] font-semibold rounded-md hover:bg-[#a89055] transition-all"
        onClick={() => setIsOpen(true)}
        title="Book Now"
      >
        Book a Consultation
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="relative bg-white rounded-lg w-11/12 md:w-1/3 p-6 shadow-lg">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
              onClick={() => setIsOpen(false)}
            >
              &#10005;
            </button>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col">
                <label htmlFor="phone" className="mb-2 text-gray-700">
                  Phone Number
                </label>
                <input
                  ref={phoneInputRef}
                  id="phone"
                  type="tel"
                  className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  placeholder="Enter your phone number"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
