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
      title: "شد الوجه (Facelift)",
      description:
        "إجراء شامل لشد الوجه لرفع الجلد المترهل، تقليل التجاعيد، واستعادة مظهر شبابي، مع نتائج طبيعية. بالإضافة إلى ذلك، هناك بعض التقنيات غير الجراحية مثل علاج شبكة العنكبوت التجميلي (Spider Web Aesthetic Treatment)، الذي يستخدم الخيوط لشد البشرة وتحفيز إنتاج الكولاجين من أجل مظهر مشدود ومنتعش دون الحاجة إلى جراحة غازية.",
      buttonText: "  احصل علي عرض أسعار",
    },
    {
      id: 2,
      image: "/procedures/1.webp",
      title: "جراحة تجميل الأنف (Rhinoplasty)",
      description:
        "في استيتيك إنترناشونال، يتم تقديم مجموعة من خيارات جراحة تجميل الأنف، بما في ذلك الأنف المفتوح والمغلق، وجراحة الأنف التجميلية للترميم، وجراحة الأنف غير الجراحية، التي تم تصميمها لتلبية احتياجات كل مريض سواء من أجل التحسين الجمالي أو معالجة المشاكل الوظيفية مثل صعوبات التنفس.",
      buttonText: "  احصل علي عرض أسعار",
    },
    {
      id: 3,
      image: "/procedures/7.webp",
      title: "تكبير الصدر، رفع الصدر (Mastopexy) تصغير الصدر",
      description:
        "إجراءات مخصصة لتحسين حجم وشكل وموقع الصدر. سواء كنتِ ترغبين في زيادة الحجم باستخدام الزرعات أو نقل الدهون، أو استعادة الشكل بعد التقدم في السن أو الحمل، أو تقليل الانزعاج بسبب الصدر الكبير، فإن هذه الجراحات تهدف إلى تحسين التناسب والراحة والثقة بالنفس مع نتائج طبيعية.",
      buttonText: "  احصل علي عرض أسعار",
    },
    {
      id: 4,
      image: "/procedures/4.webp",
      title: "جراحة الجفون (Blepharoplasty)",
      description:
        "تعامل مع ترهل الجفون وانتفاخها من خلال جراحة الجفون، التي تهدف إلى استعادة مظهر متجدد وشاب وتحسين تحديد العينين عن طريق إزالة الجلد الزائد والدهون والعضلات من الجفون العلوية أو السفلية.",
      buttonText: "  احصل علي عرض أسعار",
    },

    {
      id: 5,
      image: "/procedures/3.webp",
      title: "عملية استعادة الجسم بعد الحمل (Mommy Makeover)",
      description:
        "مجموعة من الإجراءات المخصصة لاستعادة جسم المرأة بعد الحمل والرضاعة. عادةً ما تشمل تكبير الصدر، ورفع البطن (تجميل البطن)، وشفط الدهون.",
      buttonText: "  احصل علي عرض أسعار",
    },
    {
      id: 6,
      image: "/procedures/6.webp",
      title: "شفط الدهون (Liposuction)",
      description:
        "شفط الدهون هو إجراء فعال لإزالة الدهون العنيدة من مناطق مثل البطن والفخذين والذراعين والظهر، مما يعيد تشكيل الجسم ويساعد في الحصول على مظهر أنحف وأكثر تحديدًا.",
      buttonText: "  احصل علي عرض أسعار",
    },
    {
      id: 7,
      image: "/procedures/2.webp",
      title: "جراحة الصدر (جراحة تقليص الصدر عند الرجال)",
      description:
        "إزالة الدهون والأنسجة الزائدة لاستعادة شكل صدر أكثر مسطحًا ومظهرًا أكثر ذكورية. تساعد هذه الجراحة في تحسين الثقة بالنفس وصورة الجسم للرجال الذين يشعرون بالحرج من شكل صدرهم.",
      buttonText: "  احصل علي عرض أسعار",
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
      الإجراءات
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
