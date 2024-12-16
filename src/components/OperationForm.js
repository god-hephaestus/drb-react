"use client";

import React, { useEffect, useState } from "react";
import {
  getCountries,
  getCountryCallingCode,
  isValidPhoneNumber,
} from "libphonenumber-js";

export default function Form() {
  const [submitted, setSubmitted] = useState(false);
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("US");
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [queryParams, setQueryParams] = useState({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_content: "",
    utm_term: "",
    utm_ad: "",
    gclid: "",
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setQueryParams({
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_content: params.get("utm_content") || "",
      utm_term: params.get("utm_term") || "",
      utm_ad: params.get("utm_ad") || "",
      gclid: params.get("gclid") || "",
    });

    const allCountries = getCountries().map((code) => ({
      code,
      name:
        new Intl.DisplayNames(["en"], { type: "region" }).of(code) || "Unknown",
      phoneCode: getCountryCallingCode(code),
    }));

    setCountries(allCountries);
    setFilteredCountries(allCountries);

    const detectUserCountry = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        setCountryCode(data.country_code || "US");
      } catch {
        setCountryCode("US");
      }
    };

    detectUserCountry();
  }, []);

  const validatePhoneNumber = () => {
    if (
      !isValidPhoneNumber(
        `+${getCountryCallingCode(countryCode)}${phone}`,
        countryCode
      )
    ) {
      setPhoneError("Please enter a valid phone number!");
      return false;
    }
    setPhoneError("");
    return true;
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    if (phoneError) validatePhoneNumber();
  };

  const handleCountryFilter = (e) => {
    const search = e.target.value.toLowerCase();
    setCountryCode(search);

    const filtered = countries.filter(
      (country) =>
        country.name.toLowerCase().includes(search) ||
        country.code.toLowerCase().includes(search) ||
        country.phoneCode.startsWith(search)
    );

    setFilteredCountries(filtered);
    setDropdownVisible(true);
  };

  const handleCountrySelect = (selectedCode) => {
    setCountryCode(selectedCode);
    setDropdownVisible(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validatePhoneNumber()) return;

    const formData = new FormData(e.target);
    const values = Object.fromEntries(formData.entries());
    const formattedValues = {
      ...values,
      type: "LND-Drb-React",
      phone: `+${getCountryCallingCode(countryCode)}${phone}`,
      ...queryParams,
    };

    if (!submitted) {
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
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className="lg:w-1/2 max-w-[549px] h-[424px]"
        style={{ backgroundImage: "url('/formImg.webp')" }}
      ></div>
      <form
        onSubmit={handleFormSubmit}
        className="w-full lg:w-1/2 max-w-lg bg-transparent p-6 rounded-lg shadow-md"
      >
        {Object.keys(queryParams).map((key) => (
          <input key={key} type="hidden" name={key} value={queryParams[key]} />
        ))}
        <input type="hidden" name="type" value="Reactlp" />

        <div className="mb-4">
          <label className="block text-white mb-2">Your Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-3 py-2 border rounded-lg placeholder-black text-black"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4 relative">
          <label className="block text-white mb-2">Phone Number</label>
          <div className="flex space-x-2">
            <div className="relative w-1/2">
              <input
                type="text"
                value={countryCode}
                onChange={handleCountryFilter}
                placeholder="Search country (name, code, or phone code)"
                className="w-full px-3 py-2 border rounded-lg placeholder-black text-black"
                onFocus={() => setDropdownVisible(true)}
              />
              {dropdownVisible && (
                <ul className="absolute top-12 left-0 w-full bg-white border rounded-lg shadow-lg max-h-60 overflow-auto z-10">
                  {filteredCountries.map((country) => (
                    <li
                      key={country.code}
                      onClick={() => handleCountrySelect(country.code)}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black"
                    >
                      {country.name} (+{country.phoneCode})
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <input
              type="text"
              value={phone}
              onChange={handlePhoneChange}
              onBlur={validatePhoneNumber}
              maxLength={10}
              className="w-1/2 px-3 py-2 border rounded-lg placeholder-black text-black"
              placeholder="Your phone number"
            />
          </div>
          {phoneError && (
            <p className="text-red-500 text-sm mt-2">{phoneError}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-white mb-2">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-3 py-2 border rounded-lg placeholder-black text-black"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-white mb-2">Message</label>
          <textarea
            name="message"
            rows="4"
            className="w-full px-3 py-2 border rounded-lg placeholder-black text-black"
            placeholder="Write your message"
          ></textarea>
        </div>

        <div className="text-right">
          <button
            type="submit"
            disabled={submitted}
            className={`px-6 py-2 text-white rounded-lg ${
              submitted ? "bg-gray-400" : "bg-[#c0a062]"
            }`}
          >
            {submitted ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
