import Image from "next/image";

export default function Advantages() {
  return (
    <div className="w-full my-9">
      <div className="container mx-auto lg:px-[10%]">
        <h3 className="text-[#c0a062] text-center text-4xl mb-9">
          لماذا دكتور ب؟
        </h3>
        <div className="flex justify-center items-center flex-wrap">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="lg:w-1/3 w-1/2 flex flex-col justify-center items-center py-4"
            >
              <div className="relative w-16 h-16">
                <Image
                  src={advantage.icon}
                  alt={advantage.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-lg text-white font-semibold p-2 text-center">
                {advantage.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const advantages = [
  {
    icon: "/icons/adv-1.svg",
    alt: "advantage icon",
    text: "30 عاما من الخبرة",
  },
  {
    icon: "/icons/adv-2.svg",
    alt: "advantage icon",
    text: "أعلى المعايير الطبية",
  },
  {
    icon: "/icons/adv-3.svg",
    alt: "advantage icon",
    text: "طبيب مشهور عالميًا",
  },
  {
    icon: "/icons/adv-4.svg",
    alt: "advantage icon",
    text: "تقنيات خاصة حاصلة على براءة اختراع",
  },
  {
    icon: "/icons/adv-5.svg",
    alt: "advantage icon",
    text: "جوائز البستوري الذهبية",
  },
  {
    icon: "/icons/adv-6.svg",
    alt: "advantage icon",
    text: "أفضل مركز طبي في تركيا",
  },
];
