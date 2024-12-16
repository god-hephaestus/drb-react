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
  const [queryParams, setQueryParams] = useState({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_content: "",
    utm_term: "",
    utm_ad: "",
    gclid: "",
  });
  const [phoneError, setPhoneError] = useState("");

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
    <div className="flex justify-center items-center h-screen ">
      <div
        className="w-1/2 max-w-[549px] h-[424px]"
        style={{ backgroundImage: "url('/formImg.webp')" }}
      ></div>
      <form
        onSubmit={handleFormSubmit}
        className="w-full lg:w-1/2 max-w-lg bg-transparent p-6 rounded-lg shadow-md"
      >
        <input type="hidden" name="utm_source" value={queryParams.utm_source} />
        <input type="hidden" name="utm_medium" value={queryParams.utm_medium} />
        <input
          type="hidden"
          name="utm_campaign"
          value={queryParams.utm_campaign}
        />
        <input
          type="hidden"
          name="utm_content"
          value={queryParams.utm_content}
        />
        <input type="hidden" name="utm_term" value={queryParams.utm_term} />
        <input type="hidden" name="utm_ad" value={queryParams.utm_ad} />
        <input type="hidden" name="gclid" value={queryParams.gclid} />
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

        <div className="mb-4">
          <label className="block text-white mb-2">Phone Number</label>
          <div className="flex space-x-2">
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="w-1/3 px-3 py-2 border rounded-lg placeholder-black text-black"
            >
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name} (+{country.phoneCode})
                </option>
              ))}
            </select>
            <input
              type="text"
              value={phone}
              onChange={handlePhoneChange}
              onBlur={validatePhoneNumber}
              maxLength={10}
              className="w-2/3 px-3 py-2 border rounded-lg placeholder-black text-black"
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
