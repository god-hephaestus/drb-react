"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

export default function VideoSwiper() {
  const imagePaths = [
    "/cover/videoCoverB.webp",
    "/cover/videoCoverB2.webp",
    "/cover/videoCoverB3.webp",
    "/cover/videoCoverB4.webp",
    "/cover/videoCoverB5.webp",
    "/cover/videoCoverB6.webp",
    "/cover/videoCoverB7.webp",
  ];

  const videoLinks = [
    "https://www.youtube.com/embed/NOjjQRVxXzM",
    "https://www.youtube.com/embed/3mP2XhedpdU",
    "https://www.youtube.com/embed/7dO6yDnXmAc",
    "https://www.youtube.com/embed/NBGk_V_QV9U",
    "https://www.youtube.com/embed/9A0yFvIyP08",
    "https://www.youtube.com/embed/QCHgGmYBgCU",
    "https://www.youtube.com/embed/wiT4VLiY3QE",
  ];

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
    <section className="py-12">
      <div className="container mx-auto px-10">
        <h3 className="text-center text-4xl font-semibold mb-8 text-[#c0a062]">
        شهادات
        </h3>
        <div className="relative">
          <Swiper
            className="w-full"
            touchReleaseOnEdges
            modules={[Navigation]}
            navigation={{
              nextEl: ".videoNext",
              prevEl: ".videoPrev",
            }}
            breakpoints={{
              480: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
          >
            {imagePaths.map((path, index) => (
              <SwiperSlide
                key={index}
                className="relative flex items-center justify-center cursor-pointer"
                onClick={() => openModal(videoLinks[index])}
              >
                <div className="inline-block w-full h-full rounded-lg overflow-hidden">
                  <Image
                    src={path}
                    alt={`Video thumbnail ${index + 1}`}
                    width={400}
                    height={400}
                    className="w-full"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="videoNext absolute top-1/2 right-0 transform -translate-y-1/2 w-10 h-10 bg-[#c0a06280] text-white rounded-full flex items-center justify-center z-10 cursor-pointer text-lg">
            <span className="inline-block p-1 transform -rotate-90">▼</span>
          </div>
          <div className="videoPrev absolute top-1/2 left-0 transform -translate-y-1/2 w-10 h-10 bg-[#c0a06280] text-white rounded-full flex items-center justify-center z-10 cursor-pointer text-lg">
            <span className="inline-block p-1 transform rotate-90">▼</span>
          </div>
        </div>
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
    </section>
  );
}
