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
          99% Shkallë Rekomandimi
        </h3>
        <p className="pb-5 font-semibold text-white">
          Estetik International ka një shkallë rekomandimi prej 99% nga mbi
          5,000 pacientë të kënaqur.
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
        <h3 className="text-[#c0a062] text-lg">
          &quot;Is This Me?&quot; në TLC
        </h3>
        <p className="pb-5 font-semibold text-white">
          Në episodet e emisionit &quot;Is This Me?&quot; në TLC, Dr. B trajton
          shqetësimet e tre pacientëve që nuk janë të kënaqur me pamjen e tyre.
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
          Dr. B tregon se si prekje të vogla mund të sjellin ndryshime të mëdha
          në pamjen fizike dhe vetëbesimin e dikujt.
        </p>
      </div>
    </div>
  );
}
