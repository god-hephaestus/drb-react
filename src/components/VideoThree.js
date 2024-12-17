"use client";

import React, { useState } from "react";

export default function VideoThree() {
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const openModal = (url) => {
    setVideoUrl(url);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setVideoUrl("");
  };

  return (
    <div>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center lg:gap-6">
        <div
          className="w-[360px] sm:w-[420px] lg:w-1/3 xl:w-[420px] h-[416px] my-2 lg:my-9 rounded-[25px] bg-cover bg-center shadow-[0_10px_8px_0_#c0a062] cursor-pointer"
          style={{ backgroundImage: "url('/3video/video-cover.webp')" }}
          onClick={() => openModal("https://www.youtube.com/embed/AzsoxUsGWVI")}
        ></div>

        <div
          className="w-[360px] sm:w-[420px] lg:w-1/3 xl:w-[420px] h-[416px] my-2 lg:my-9 rounded-[25px] bg-cover bg-center shadow-[0_10px_8px_0_#c0a062] cursor-pointer"
          style={{ backgroundImage: "url('/3video/tlc.webp')" }}
          onClick={() => openModal("https://www.youtube.com/embed/95NNAe1wdr0")}
        ></div>

        <div
          className="w-[360px] sm:w-[420px] lg:w-1/3 xl:w-[420px] h-[416px] my-2 lg:my-9 rounded-[25px] bg-cover bg-center shadow-[0_10px_8px_0_#c0a062] cursor-pointer"
          style={{ backgroundImage: "url('/3video/fashionVideo.webp')" }}
          onClick={() => openModal("https://www.youtube.com/embed/9e1R_gFK1EE")}
        ></div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white text-3xl font-bold cursor-pointer"
            >
              &times;
            </button>

            <div className="relative" style={{ paddingTop: "56.25%" }}>
              <iframe
                src={`${videoUrl}?autoplay=1`}
                title="YouTube Video"
                allow="autoplay; fullscreen"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
