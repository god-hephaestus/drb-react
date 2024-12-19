import Image from "next/image";

export default function Advantages() {
  return (
    <div className="w-full my-9">
      <div className="container mx-auto lg:px-[10%]">
        <h3 className="text-[#c0a062] text-center text-4xl mb-9">
        Pse të Zgjidhni Doktor B?
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
              <p className="text-lg font-semibold p-2 text-center">
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
    text: "30 Vite Eksperiencë",
  },
  {
    icon: "/icons/adv-2.svg",
    alt: "advantage icon",
    text: "Doktor i Njohur Ndërkombëtarisht",
  },
  {
    icon: "/icons/adv-3.svg",
    alt: "advantage icon",
    text: "Çmimet Bisturi të Arta",
  },
  {
    icon: "/icons/adv-4.svg",
    alt: "advantage icon",
    text: "Standarde Mjekësore të Nivelit të Lartë",
  },
  {
    icon: "/icons/adv-5.svg",
    alt: "advantage icon",
    text: "Teknika të Posaçme me Patentë",
  },
  {
    icon: "/icons/adv-6.svg",
    alt: "advantage icon",
    text: "Qendra Mjekësore Më e Mirë në Turqi",
  },
];
