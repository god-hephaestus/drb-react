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
      title: "Facelift",
      description:
        "A comprehensive facelift procedure to lift sagging skin, reduce wrinkles, and restore a youthful appearance, offering natural-looking results, as well as some other non-surgical techniques like the Spider Web Aesthetic Treatment which uses threads to tighten and stimulate collagen production for a refreshed, lifted look without the need for invasive surgery.",
      buttonText: "Learn More",
    },
    {
      id: 2,
      image: "/doctor-b-logo.webp",
      title: "Rhinoplasty (Nose Job) Surgery ",
      description:
        "At Estetik International, Dr. B offers a range of rhinoplasty options, including open, closed, revision, and non-surgical rhinoplasty, tailored to each patient’s unique needs for both aesthetic enhancement and functional concerns, like breathing issues.",
      buttonText: "Learn More",
    },
    {
      id: 3,
      image: "/doctor-b-logo.webp",
      title:
        "Breast Augmentation, Breast Lift (Mastopexy), and Breast Reductions",
      description:
        "Customized procedures to enhance the size, shape, and position of your breasts. Whether you're looking to increase volume with implants or fat transfer, restore firmness after aging or pregnancy, or reduce discomfort from overly large breasts, these surgeries are designed to improve proportion, comfort, and confidence with natural-looking results.",
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
              <div className="flex flex-col w-full lg:w-2/3 text-center items-center lg:items-start lg:text-left mb-9 px-9 lg:pl-0 lg:pr-[5%]">
                <h3 className="text-xl font-bold mb-4 text-[#ffffff]">
                  {slide.title}
                </h3>
                <p className="text-md mb-6 leading-relaxed text-[#ffffff]">
                  {slide.description}
                </p>
                <a
                  href="#"
                  className="text-center w-[180px] py-3 rounded-full font-medium text-white bg-gradient-to-r from-[#c0a062de] to-[#c0a062] transition-opacity duration-200 hover:opacity-80"
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
