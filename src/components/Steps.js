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
          99% Recommendation Rate
        </h3>
        <p className="pb-5 font-semibold text-white">
          Estetik International has 99% Recommendation Rate from +5,000
          Patients.
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
        <h3 className="text-[#c0a062] text-lg">“Is This Me?” on TLC</h3>
        <p className="pb-5 font-semibold text-white">
          In each episode of TLC’s “Is This Me?” show, Doctor B addresses the
          concerns of three patients who are not happy with their appearance.
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
          Doctor B displays how small touches can bring great positives in one’s
          physical appearance and self-confidence.
        </p>
      </div>
    </div>
  );
}
