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
      title: "Подтяжка лица (Фейслифтинг)",
      description:
        "Комплексная процедура подтяжки лица, направленная на устранение обвисшей кожи, уменьшение морщин и восстановление молодого внешнего вида с естественными результатами. Также предлагаются другие неинвазивные методы, такие как эстетическая процедура «Spider Web», использующая нити для подтяжки кожи и стимуляции выработки коллагена, придавая омоложённый и подтянутый вид без необходимости в хирургическом вмешательстве.",
      buttonText: "Получить Предложение",
    },
    {
      id: 2,
      image: "/procedures/1.webp",
      title: "Ринопластика",
      description:
        "В Estetik International предлагаются различные варианты ринопластики, включая открытую, закрытую, реконструктивную и неоперационную ринопластику, адаптированные под уникальные потребности каждого пациента. Мы учитываем как эстетические, так и функциональные особенности, такие как проблемы с дыханием.",
      buttonText: "Получить Предложение",
    },
    {
      id: 3,
      image: "/procedures/7.webp",
      title: "Увеличение груди, Подтяжка груди и Уменьшение груди",
      description:
        "Индивидуально подобранные процедуры для улучшения размера, формы и положения груди. Будь то увеличение объёма с помощью имплантов или переноса жира, восстановление упругости после старения или беременности, или уменьшение дискомфорта от слишком крупных грудей — эти операции направлены на улучшение пропорций, комфорта и уверенности в себе с естественными результатами.",
      buttonText: "Получить Предложение",
    },
    {
      id: 4,
      image: "/procedures/4.webp",
      title: "Блефаропластика",
      description:
        "Эта процедура решает проблемы с обвисшими веками и отечностью, восстанавливая свежий и молодой вид, улучшая контуры глаз, удаляя лишнюю кожу, жир и мышцы с верхних или нижних век.",
      buttonText: "Получить Предложение",
    },

    {
      id: 5,
      image: "/procedures/3.webp",
      title: "Mommy Makeover",
      description:
        "Персонализированный набор процедур, направленных на восстановление формы тела женщины после беременности и грудного вскармливания. Обычно это включает в себя увеличение груди, абдоминопластику и липосакцию.",
      buttonText: "Получить Предложение",
    },
    {
      id: 6,
      image: "/procedures/6.webp",
      title: "Липосакция",
      description:
        "Липосакция — эффективная процедура удаления стойкого жира с таких зон, как живот, бедра, руки и спина. Она помогает создать более стройное и подтянутое тело.",
      buttonText: "Получить Предложение",
    },
    {
      id: 7,
      image: "/procedures/2.webp",
      title: "Операция по уменьшению груди у мужчин (Гинекомастия)",
      description:
        "Удаление избыточного жира и ткани для восстановления более плоской и мужественной формы груди. Эта процедура помогает улучшить уверенность в себе и восприятие своего тела у мужчин, которые переживают из-за внешнего вида своей груди.",
      buttonText: "Получить Предложение",
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
