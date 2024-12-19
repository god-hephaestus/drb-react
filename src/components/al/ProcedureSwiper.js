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
        "Një procedurë gjithëpërfshirëse për të ngritur lëkurën që ka rënë, për të zvogëluar rrudhat dhe për të rikthyer një pamje të rinovuar, duke ofruar rezultate natyrale. Përveç kësaj, ekzistojnë edhe teknika të tjera jo kirurgjikale si Spider Web Aesthetic Treatment, që përdor fije për të ngjeshur dhe stimuluar prodhimin e kolagjenit, për një pamje të freskët dhe pa pasur nevojë për kirurgji.",
      buttonText: "Rezervoni Konsultën Tuaj",
    },
    {
      id: 2,
      image: "/procedures/1.webp",
      title: "Rinoplastika (Nose Job)",
      description:
        "Në Estetik International, ofrohen një gamë opsionesh për rinoplastikë, përfshirë rinoplastikë të hapur, të mbyllur, rinoplastikë për rishikim dhe rinoplastikë jo kirurgjikale, të cilat janë të personalizuara për nevojat e çdo pacienti, për përmirësimin estetik dhe shqetësimet funksionale, siç janë problemet me frymëmarrjen.",
      buttonText: "Rezervoni Konsultën Tuaj",
    },
    {
      id: 3,
      image: "/procedures/7.webp",
      title: "Zmadhimi i Gjoksit, Lifting i Gjoksit(Mastopeksi) dhe Reduktimi i Gjoksit",
      description:
        "Procedura të personalizuara për të përmirësuar madhësinë, formën dhe pozicionin e gjoksit tuaj. Nëse dëshironi të rrisni volumin me implante ose transferim të yndyrës, të riktheni ngurtësinë pas shtatëzanisë ose kalimit të moshës, apo të zvogëloni shqetësimin nga gjoksi i madh, këto kirurgji janë posaçërisht për të përmirësuar proporcionet, komoditetin dhe vetëbesimin, duke ofruar rezultate natyrale.",
      buttonText: "Rezervoni Konsultën Tuaj",
    },
    {
      id: 4,
      image: "/procedures/4.webp",
      title: "Kirurgjia e Kapakëve të Syve (Blefaroplastika)",
      description:
        "Teknikë, e cila është projektuar për të rikthyer një pamje të freskët dhe rinore dhe për të përmirësuar konturin e syve tuaj, duke hequr lëkurën e tepërt, yndyrën dhe muskujt nga kapakët e sipërm ose pjesën e poshtme të syve.",
      buttonText: "Rezervoni Konsultën Tuaj",
    },

    {
      id: 5,
      image: "/procedures/3.webp",
      title: "Mommy Makeover",
      description:
        "Një kombinim i personalizuar i procedurave të projektuara për të rikthyer trupin përfekt të një gruaje pas shtatëzanisë dhe gjidhënies. Kjo zakonisht përfshin zmadhimin e gjoksit, abdominoplastikën dhe liposuksionin.",
      buttonText: "Rezervoni Konsultën Tuaj",
    },
    {
      id: 6,
      image: "/procedures/6.webp",
      title: "Liposuksioni",
      description:
        "Liposuksioni (liposuction) është një procedurë efektive për të hequr yndyrën ‘kokëfortë’ nga zona si barku, kofshët, krahët dhe shpina, duke formuar trupin dhe duke ndihmuar në arritjen e një pamjeje më elegante dhe të tonifikuar.",
      buttonText: "Rezervoni Konsultën Tuaj",
    },
    {
      id: 7,
      image: "/procedures/2.webp",
      title: "Kirurgjia e Ginekomastisë (Reduktimi i Gjoksit të Meshkujve)",
      description:
        "Heqja e yndyrës dhe indeve të tepërta, duke rikthyer një kontur më të sheshtë dhe më mashkullor të gjoksit. Kjo procedurë ndihmon në përmirësimin e vetëbesimit dhe imazhit të trupit për meshkujt që ndihen të vetëdijshëm për pamjen e gjoksit të tyre.",
      buttonText: "Rezervoni Konsultën Tuaj",
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
      Procedura
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
                <div className="flex flex-col w-full lg:w-2/3 text-center items-center lg:items-start lg:text-left lg:mb-9 px-5 lg:pl-0 lg:pr-[5%]">
                  <h3 className="text-3xl font-bold mb-4 text-[#c0a062] lg:h-[64px]">
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
