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
      title: "Podizanje Lica (Facelift)",
      description:
        "Kompletna procedura podizanja lica koja uklanja opuštenu kožu, smanjuje bore i obnavlja mladalački izgled, sa prirodnim rezultatima. Takođe, dostupne su i nehirurške tehnike poput Spider Web Estetskog Tretmana, koji koristi niti za zatezanje kože i stimulaciju proizvodnje kolagena, pružajući podignut i osvežen izgled bez potrebe za invazivnom hirurgijom.",
      buttonText: "Zatražite ponudu",
    },
    {
      id: 2,
      image: "/procedures/1.webp",
      title: "Rinoplastika (Plastika Nosa)",
      description:
        "U Estetik International nudimo širok spektar opcija za rinoplastiku, uključujući otvorenu, zatvorenu, revisionalnu i nehiruršku rinoplastiku, prilagođene jedinstvenim potrebama svakog pacijenta za estetsko poboljšanje, kao i rešavanje funkcionalnih problema poput poteškoća sa disanjem.",
      buttonText: "Zatražite ponudu",
    },
    {
      id: 3,
      image: "/procedures/7.webp",
      title:
        "Povećanje Grudi, Podizanje Grudi (Mastopeksija) i Smanjenje Grudi",
      description:
        "Personalizovane procedure za poboljšanje veličine, oblika i položaja vaših grudi. Bilo da želite da povećate volumen pomoću implantata ili transfera masti, obnovite čvrstinu nakon starenja ili trudnoće, ili smanjite nelagodnost zbog prevelikih grudi, ove hirurške intervencije dizajnirane su da poboljšaju proporcije, udobnost i samopouzdanje sa prirodnim rezultatima.",
      buttonText: "Zatražite ponudu",
    },
    {
      id: 4,
      image: "/procedures/4.webp",
      title: "Plastika Očnih Kapaka (Blefaroplastika)",
      description:
        "Rešava problem opuštenih kapaka i podočnjaka tako što uklanja višak kože, masti i mišića sa gornjih ili donjih kapaka, vraćajući osvežen, mladalački izgled i poboljšavajući konturu očiju.",
      buttonText: "Zatražite ponudu",
    },

    {
      id: 5,
      image: "/procedures/3.webp",
      title: "Mommy Makeover",
      description:
        "Personalizovan skup procedura dizajniran da obnovi telo žene nakon trudnoće i dojenja. Obično uključuje povećanje grudi, abdominoplastiku i liposukciju.",
      buttonText: "Zatražite ponudu",
    },
    {
      id: 6,
      image: "/procedures/6.webp",
      title: "Liposukcija",
      description:
        "Liposukcija je efikasan postupak za uklanjanje tvrdoglavih masnoća sa područja kao što su stomak, butine, ruke i leđa, oblikujući telo i pomažući vam da postignete vitkiji, toniraniji izgled.",
      buttonText: "Zatražite ponudu",
    },
    {
      id: 7,
      image: "/procedures/2.webp",
      title: "Ginekomastija (Smanjenje Grudi Kod Muškaraca)",
      description:
        "Uklanjanjem viška masti i tkiva postiže se ravniji i muževniji oblik grudi. Ova procedura poboljšava samopouzdanje i telesnu sliku muškaraca koji se stide izgleda svojih grudi.",
      buttonText: "Zatražite ponudu",
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
        Procedure
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
