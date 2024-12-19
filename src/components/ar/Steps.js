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
        <h3 className="text-[#c0a062] text-lg leading-8">معدل توصية 99٪</h3>
        <p className="pb-5 font-semibold text-white">
          Estetik International لديها معدل توصية بنسبة 90٪ من +5000 مريض
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
          &quot;Is This Me?&quot; علي TLC
        </h3>
        <p className="pb-5 font-semibold text-white">
          في كل حلقة من حلقات برنامج &quot;Is This Me؟&quot; على قناة TLC، يقوم
          دكتور ب بعالجة مخاوف ثلاثة مرضى ليسوا سعداء بمظهرهم.
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
        <h3 className="text-[#c0a062] text-lg">تلفزيون الموضة</h3>
        <p className="pb-5 font-semibold text-white">
          يعرض دكتور ب كيف يمكن لللمسات الصغيرة أن تجلب إيجابيات كبيرة في المظهر
          الجسدي والثقة بالنفس.
        </p>
      </div>
    </div>
  );
}
