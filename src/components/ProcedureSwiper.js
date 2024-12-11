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
    <section className="relative mx-auto bg-[#151515] shadow-lg rounded-2xl max-w-[1100px] p-4 my-10">
      <Swiper
        loop={true}
        modules={[Mousewheel, Pagination]}
        mousewheel={true}
        pagination={{
          el: ".blog-slider__pagination",
          clickable: true,
          bulletActiveClass: "custom-bullet-active",
        }}
        spaceBetween={30}
        effect="fade"
        slidesPerView={1}
        className="w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
              <div className="w-full lg:w-1/3 flex items-center">
                <div className="relative mx-auto lg:mx-0 w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] rounded-2xl overflow-hidden bg-gradient-to-r from-[#c0a06200] to-[#c0a062bc]">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-2xl"
                  />
                </div>
              </div>
              <div className="flex flex-col w-full lg:w-2/3 text-center items-center lg:items-start lg:text-left mb-9">
                <h3 className="text-2xl font-bold mb-4 text-[#ffffff]">
                  {slide.title}
                </h3>
                <p className="text-sm mb-6 leading-relaxed text-[#ffffff]">
                  {slide.description}
                </p>
                <a
                  href="#"
                  className="text-center w-[200px] px-6 py-3 rounded-full font-medium text-white bg-gradient-to-r from-[#c0a062de] to-[#c0a062] transition-opacity duration-200 hover:opacity-80"
                >
                  {slide.buttonText}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="blog-slider__pagination absolute z-20 right-5 text-center "></div>
    </section>
  );
}
