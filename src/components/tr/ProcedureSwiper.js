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
      title: "Yüz Germe (Facelift)",
      description:
        "Sarkmış cildi kaldırmak, kırışıklıkları azaltmak ve genç bir görünüm sağlamak için kapsamlı bir yüz germe prosedürü, doğal görünümlü sonuçlar sunar. Ayrıca, invaziv cerrahiye gerek kalmadan cildi sıkılaştırmak ve kolajen üretimini uyarmak için ipler kullanılan Spider Web Estetik Tedavisi gibi cerrahi olmayan teknikler de mevcuttur.",
      buttonText: "Fiyat Teklifi Alın!",
    },
    {
      id: 2,
      image: "/procedures/1.webp",
      title: "Burun Estetiği (Rinoplasti)",
      description:
        "Estetik International'da, açık, kapalı, revizyon ve cerrahi olmayan rinoplasti seçenekleri sunulmaktadır, her hastanın estetik ve fonksiyonel ihtiyaçlarına göre özelleştirilmiş bir şekilde, nefes alma problemleri gibi işlevsel sorunlar da dahil olmak üzere, burun estetiği yapılmaktadır.",
      buttonText: "Fiyat Teklifi Alın!",
    },
    {
      id: 3,
      image: "/procedures/7.webp",
      title: "Mamoplasti",
      description:
        "Meme büyüklüğünü, şeklini ve pozisyonunu artırmak için kişiye özel prosedürler sunulur. İmplantlar veya yağ transferi ile hacim artırmak, yaşlanma veya hamilelik sonrası sıkılığı geri kazandırmak veya aşırı büyük göğüslerden kaynaklanan rahatsızlıkları azaltmak amacıyla yapılan bu cerrahiler, doğal görünümlü sonuçlarla vücut oranını, konforu ve özgüveni artırmak için tasarlanmıştır.",
      buttonText: "Fiyat Teklifi Alın!",
    },
    {
      id: 4,
      image: "/procedures/4.webp",
      title: "Göz Kapağı Estetiği (Blefaroplasti)",
      description:
        "Sarkmış göz kapakları ve şişlikleri tedavi etmek için göz kapağı estetiği, gözlerinizin daha genç ve taze bir görünüm kazanmasını sağlamak amacıyla üst veya alt göz kapaklarındaki fazla deri, yağ ve kasları alarak göz etrafını iyileştirir.",
      buttonText: "Fiyat Teklifi Alın!",
    },

    {
      id: 5,
      image: "/procedures/3.webp",
      title: "Mommy Makeover (Annelik Estetiği)",
      description:
        "Hamilelik ve emzirme sonrası kadının vücudunu eski haline getirmek için kişiye özel bir prosedürler kombinasyonudur. Genellikle meme büyütme, karın germe ve liposuction içerir.",
      buttonText: "Fiyat Teklifi Alın!",
    },
    {
      id: 6,
      image: "/procedures/6.webp",
      title: "Liposuction (Yağ Alma)",
      description:
        "Liposuction, karın, uyluklar, kollar ve sırt gibi bölgelerdeki inatçı yağları almak için etkili bir prosedürdür. Vücudunuzu şekillendirir ve daha ince, daha tonlu bir görünüm elde etmenize yardımcı olur.",
      buttonText: "Fiyat Teklifi Alın!",
    },
    {
      id: 7,
      image: "/procedures/2.webp",
      title: "Jinekomasti Ameliyatı (Erkek Meme Küçültme)",
      description:
        "Fazla yağ ve dokuyu çıkararak, daha düz ve maskülen bir göğüs şekli sağlanır. Bu prosedür, göğüs görünümünden rahatsızlık duyan erkekler için özgüveni ve vücut imajını iyileştirir.",
      buttonText: "Fiyat Teklifi Alın!",
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
        Prosedürler
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
