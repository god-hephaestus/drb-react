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
      image: "/procedures/5.webp",
      title: "Facelift",
      description:
        "A comprehensive facelift procedure to lift sagging skin, reduce wrinkles, and restore a youthful appearance, offering natural-looking results, as well as some other non-surgical techniques like the Spider Web Aesthetic Treatment which uses threads to tighten and stimulate collagen production for a refreshed, lifted look without the need for invasive surgery.",
      buttonText: "Book a Consultation",
    },
    {
      id: 2,
      image: "/procedures/1.webp",
      title: "Rhinoplasty (Nose Job)",
      description:
        "At Estetik International, Dr. B offers a range of rhinoplasty options, including open, closed, revision, and non-surgical rhinoplasty, tailored to each patient’s unique needs for both aesthetic enhancement and functional concerns, like breathing issues.",
      buttonText: "Book a Consultation",
    },
    {
      id: 3,
      image: "/procedures/7.webp",
      title: "Mammaplasty",
      description:
        "Customized procedures to enhance the size, shape, and position of your breasts. Whether you're looking to increase volume with implants or fat transfer, restore firmness after aging or pregnancy, or reduce discomfort from overly large breasts, these surgeries are designed to improve proportion, comfort, and confidence with natural-looking results.",
      buttonText: "Book a Consultation",
    },
    {
      id: 4,
      image: "/procedures/4.webp",
      title: "Eyelid Surgery",
      description:
        "Address sagging eyelids and puffiness with eyelid surgery, designed to restore a refreshed, youthful look and improve the contour of your eyes, by removing excess skin, fat, and muscle from the upper or lower eyelids.",
      buttonText: "Book a Consultation",
    },

    {
      id: 5,
      image: "/procedures/3.webp",
      title: "Mommy Makeover",
      description:
        "A personalized combination of procedures designed to restore a woman’s body after pregnancy and breastfeeding. Typically, this includes breast augmentation, tummy tuck, and liposuction.",
      buttonText: "Book a Consultation",
    },
    {
      id: 6,
      image: "/procedures/6.webp",
      title: "Liposuction",
      description:
        "Liposuction is an effective procedure to remove stubborn fat from areas like the abdomen, thighs, arms, and back, reshaping your body and helping you achieve a slimmer, more toned appearance.",
      buttonText: "Book a Consultation",
    },
    {
      id: 7,
      image: "/procedures/2.webp",
      title: "Gynecomastia",
      description:
        "Remove excess fat and tissue, restoring a flatter, more masculine chest contour. This procedure helps improve self-confidence and body image for men who feel self-conscious about their chest appearance.",
      buttonText: "Book a Consultation",
    },
  ];

  const handleScroll = (event) => {
    event.preventDefault();
    const targetElement = document.getElementById("op-form");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <h5 className="text-4xl font-semibold text-[#c0a062] text-center">
        Procedures
      </h5>
      <section className="relative mx-auto bg-[#151515]  shadow-lg rounded-2xl max-w-[1280px] p-4 my-9">
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
              <div className="flex flex-col lg:flex-row items-center lg:items-start lg:gap-6">
                <div className="w-full lg:w-1/3 flex items-center">
                  <div className="relative mx-auto lg:mx-0 w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] rounded-2xl overflow-hidden bg-gradient-to-b lg:bg-gradient-to-r from-[#c0a06200] to-[#c0a062bc]">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      sizes="(max-width: 768px) 70vw, (max-width: 1200px) 33vw, 33vw"
                      className="rounded-2xl object-contain"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full lg:w-2/3 text-center items-center lg:items-start lg:text-left lg:mb-9 px-3 lg:pl-0 lg:pr-[5%]">
                  <h3 className="text-3xl font-bold m-4 text-[#c0a062] lg:h-[64px]">
                    {slide.title}
                  </h3>
                  <p className="text-md mb-6 leading-relaxed lg:h-[140px] text-[#ffffff]">
                    {slide.description}
                  </p>
                  <a
                    href="#op-form"
                    onClick={handleScroll}
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
    </>
  );
}
