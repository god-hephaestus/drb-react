"use client";

import React, { useState } from "react";

export default function ClinicImgs() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    "/clinic/1.webp",
    "/clinic/2.webp",
    "/clinic/3.webp",
    "/clinic/4.webp",
    "/clinic/5.webp",
    "/clinic/6.webp",
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <h4 className="text-center my-8 text-4xl text-[#c0a062] font-semibold">
        Doctor B Clinic
      </h4>

      <div className="relative flex justify-center">
        <div className="relative w-[85%] lg:w-[70%] h-[400px] max-w-[1100px] lg:h-[400px] overflow-hidden rounded-lg ">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide}
                alt={`Clinic Image ${index + 1}`}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              />
            </div>
          ))}
        </div>

        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 bg-[#151515] py-1 px-2 rounded-[25px] left-1/2 space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              className={` h-2 rounded-full ${
                index === activeIndex
                  ? "bg-[#c0a062] w-6"
                  : "bg-white bg-opacity-50 w-2"
              }`}
              style={{
                transition: "width 0.3s ease",
              }}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setActiveIndex(index)}
            ></button>
          ))}
        </div>

        <button
          type="button"
          className="absolute top-0 left-[4%] lg:left-[7%] xl:left-[12%] z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handlePrev}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#c0a062] ">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-[4%] lg:right-[7%] xl:right-[12%] z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handleNext}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#c0a062]">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 9l4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
}
