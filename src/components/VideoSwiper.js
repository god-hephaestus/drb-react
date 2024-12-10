"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function VideoSwiper() {
  const [swiperInstance, setSwiperInstance] = useState(null); // State to hold Swiper instance.

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
    "https://www.youtube.com/watch?v=NOjjQRVxXzM",
    "https://www.youtube.com/watch?v=3mP2XhedpdU",
    "https://www.youtube.com/watch?v=7dO6yDnXmAc",
    "https://www.youtube.com/watch?v=NBGk_V_QV9U",
    "https://www.youtube.com/watch?v=9A0yFvIyP08",
    "https://www.youtube.com/watch?v=QCHgGmYBgCU",
    "https://www.youtube.com/watch?v=wiT4VLiY3QE",
  ];

  return (
    <section className="videoArea steps-area">
      <div className="container">
        <div className="row">
          <div className="col-12 text-area">
            <h3>Testimonials</h3>
          </div>
        </div>
        <div className="row">
          <Swiper
            className="videoSwiper"
            modules={[Navigation]}
            slidesPerView={3}
            spaceBetween={20}
            navigation={{
              nextEl: ".videoNext",
              prevEl: ".videoPrev",
            }}
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            breakpoints={{
              480: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {imagePaths.map((path, index) => (
              <SwiperSlide key={index} className="videoSwiperSlide">
                <a
                  href={videoLinks[index]}
                  data-lity
                  title={`Video ${index + 1}`}
                >
                  <div
                    className="play-image"
                    style={{
                      backgroundImage: `url(${path})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "600px",
                    }}
                  ></div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Ensure navigation buttons are styled properly */}
          <div className="videoNext" style={{ cursor: "pointer" }}>
            Next
          </div>
          <div className="videoPrev" style={{ cursor: "pointer" }}>
            Prev
          </div>
        </div>
      </div>
    </section>
  );
}
