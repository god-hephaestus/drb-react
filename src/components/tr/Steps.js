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
        %99 Tavsiye Oranı
        </h3>
        <p className="pb-5 font-semibold">
        Estetik International, +5,000 hasta tarafından yapılan %99 tavsiye oranına sahiptir.
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
        <h3 className="text-[#c0a062] text-lg">TLC "Bu Ben Miyim" TV Programı'nda Doctor B</h3>
        <p className="pb-5 font-semibold">
        TLC'nin "Bu Ben miyim?" programının her bölümünde Doctor B, görünüşlerinden memnun olmayan üç hastanın endişelerini ele alıyor.
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
        Doctor B, küçük dokunuşların kişinin fiziksel görünümüne ve özgüvenine ne kadar büyük katkılar sağlayabileceğini gösteriyor.
        </p>
      </div>
    </div>
  );
}