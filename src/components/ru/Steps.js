import Image from "next/image";

export default function Steps() {
  return (
    <div className="flex flex-col lg:flex-row w-100 px-[10%] justify-center items-center bg-[#151515] mb-9">
      <div className="w-full lg:w-1/3 flex flex-col gap-4 justify-center items-center text-center px-[30px]">
        <Image
          src="/steps/step1Icon.webp"
          alt="logo"
          height={50}
          width={90}
          className="pt-5"
        />
        <h3 className="text-[#c0a062] text-lg leading-8">
          99% успешных результатов
        </h3>
        <p className="pb-5 font-semibold text-white">
          Estetik International имеет 99% успешных результатов более чем от 5000
          пациентов.
        </p>
      </div>
      <div className="w-full lg:w-1/3 flex flex-col gap-4 justify-center items-center text-center px-[30px] ">
        <Image
          className="filter grayscale pt-5"
          src="/steps/step2Icon.webp"
          alt="logo"
          height={50}
          width={90}
        />
        <h3 className="text-[#c0a062] text-lg">«Это я?» На TLC шоу</h3>
        <p className="pb-5 font-semibold text-white">
          В каждом эпизоде шоу «Это я?» на канале TLC. шоу, доктор Б обращается
          к трем пациентам, которые недовольны своей внешностью
        </p>
      </div>
      <div className="w-full lg:w-1/3 flex flex-col gap-4 justify-center items-center text-center px-[30px]">
        <Image
          src="/steps/step3Icon.webp"
          alt="logo"
          height={50}
          width={90}
          className="pt-5"
        />
        <h3 className="text-[#c0a062] text-lg">Fashion TV</h3>
        <p className="pb-5 font-semibold text-white">
          Доктор Б показывает, как небольшие прикосновения могут принести
          большой положительный эффект в отношении внешности и уверенности в
          себе.
        </p>
      </div>
    </div>
  );
}
