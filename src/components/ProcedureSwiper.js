"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

export default function ProcedureSwiper() {
  const slides = [
    {
      id: 1,
      image: "/doctor-b-logo.webp",
      title: "Facelift & Rejuvenation",
      description:
        "Facelift, Neck lift, Rhinoplasty, Eyelid Surgery, and more.",
      buttonText: "Learn More",
    },
    {
      id: 2,
      image: "/doctor-b-logo.webp",
      title: "Body Contouring",
      description: "Liposuction, Tummy Tuck, Mommy Makeovers.",
      buttonText: "Learn More",
    },
    {
      id: 3,
      image: "/doctor-b-logo.webp",
      title: "Non-Surgical Treatments",
      description: "Botox, Fillers, Spider Web Aesthetic, and Exosomes.",
      buttonText: "Learn More",
    },
  ];

  return (
    <section className="relative mx-auto p-6 bg-[#151515] shadow-lg rounded-2xl max-w-[1100px] h-[450px] transition-all duration-300 my-[50px]">
      <Swiper
        loop={true}
        modules={[Mousewheel, Pagination]}
        mousewheel={true}
        pagination={{
          el: ".blog-slider__pagination",
          clickable: true,
        }}
        spaceBetween={30}
        effect="fade"
        className="relative w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="flex flex-row items-center ">
            <div className="relative w-[300px] h-[300px] rounded-2xl overflow-hidden bg-gradient-to-r from-[#c0a06200] to-[#c0a062bc]">
              <Image
                src={slide.image}
                alt={slide.title}
                height={300}
                width={300}
                className="transition-opacity duration-300 opacity-0 rounded-2xl"
              />
            </div>
            <div className="pr-6 lg:mt-[-80px] lg:text-center lg:px-8 px-0">
              <h3 className="text-2xl font-bold mb-4 text-[#ffffff]">
                {slide.title}
              </h3>
              <p className="text-sm mb-6 leading-relaxed text-[#ffffff]">
                {slide.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full font-medium text-white bg-gradient-to-r from-[#c0a062de] to-[#c0a062] transition-opacity duration-200 hover:opacity-80"
              >
                {slide.buttonText}
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="blog-slider__pagination absolute z-20 right-5 top-1/2 -translate-y-1/2 w-[11px] text-center lg:left-1/2 lg:top-[205px] lg:transform lg:-translate-x-1/2"></div>
    </section>
  );
}
