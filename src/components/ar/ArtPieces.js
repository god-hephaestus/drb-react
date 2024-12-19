import Image from "next/image";

const artPieces = [
  { src: "/gold/1.webp", width: 175, height: 180, tailwindClass: "lg:w-[14%]" },
  { src: "/gold/2.webp", width: 227, height: 180, tailwindClass: "lg:w-[20%]" },
  { src: "/gold/3.webp", width: 131, height: 180, tailwindClass: "lg:w-[15%]" },
  { src: "/gold/4.webp", width: 175, height: 180, tailwindClass: "lg:w-[15%]" },
  { src: "/gold/5.webp", width: 135, height: 180, tailwindClass: "lg:w-[13%]" },
  { src: "/gold/6.webp", width: 220, height: 180, tailwindClass: "lg:w-[20%]" },
  { src: "/gold/7.webp", width: 154, height: 180, tailwindClass: "lg:w-[19%]" },
  { src: "/gold/8.webp", width: 265, height: 180, tailwindClass: "lg:w-[23%]" },
  { src: "/gold/9.webp", width: 129, height: 180, tailwindClass: "lg:w-[13%]" },
  {
    src: "/gold/10.webp",
    width: 227,
    height: 180,
    tailwindClass: "lg:w-[16%]",
  },
  {
    src: "/gold/11.webp",
    width: 264,
    height: 180,
    tailwindClass: "lg:w-[27%]",
  },
];

export default function ArtPieces() {
  return (
    <section className="pt-[35px] my-9 pb-[35px] bg-[#151515]">
      <div>
        <div className="text-center mb-[60px]">
          <h3 className="text-[40px] leading-[44px] text-[#c0a062]">
          اللوحات الفنية الخاصة بدكتور ب
          </h3>
        </div>
        <div className="flex flex-wrap justify-around lg:justify-center mt-[60px] container mx-auto">
          {artPieces.map((piece, index) => (
            <div
              key={index}
              className={`${piece.tailwindClass} flex justify-center text-center mb-[20px] flex-shrink-0`}
            >
              <Image
                src={piece.src}
                alt={`Doctor B art piece ${index + 1}`}
                width={piece.width}
                height={piece.height}
                sizes="(max-width: 768px) 50vw, 9vw"
                className="h-auto w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
