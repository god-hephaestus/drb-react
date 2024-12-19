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
        Stopa preporuke je 99%.
        </h3>
        <p className="pb-5 font-semibold">
        Estetik International ima stopu preporuka od 99% od + 5000 pacijenata.
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
        <h3 className="text-[#c0a062] text-lg">&quot;Da li sam ovo ja?&quot; na TLC-U</h3>
        <p className="pb-5 font-semibold">
        Usvakoj epizodi TLC-jeve emisije &quot;Da li sam ovo ja?&quot; Doktor B govori o zabrinutostima tri pacijenta koji su nezadovoljni svojim izgledom.
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
        <p className="pb-5 font-semibold">
        Doktor B pokazuje kako sitni dodiri mogu doneti velike pozitivne efekte u nečijem fizičkom izgledu i samopouzdanju.
        </p>
      </div>
    </div>
  );
}
