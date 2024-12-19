export default function Bout2() {
  return (
    <section className="w-full  bg-[#111111] text-white lg:px-[10%]">
      <div
        className="container bg-no-repeat bg-center mx-auto about2 pb-10 lg: h-[510px] xl:h-[400px] "
        style={{
          backgroundImage: 'url("/about2BgMobile.webp")',
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <style>
          {`
                @media (min-width: 1024px) {
                  .about2 {
                    background-image: url("/about2Bg.webp") !important;
                    background-size: cover;
                  }
                }
              `}
        </style>
        <div className="flex flex-wrap">
          <div className="hidden lg:block lg:w-1/2"></div>
          <div className="w-full lg:w-1/2">
            <div className="pt-[5%] lg:pr-[10%]">
              <h2 className="text-4xl p-2 text-[#c0a062] font-bold mb-5 lg:text-left text-center ">
              تعرف على رائد الجراحة التجميلية
              </h2>
              <p className="p-2 lg:text-left text-center">
              هناك مبدأ في الطب: ربما يكون عدم الإضرار هو أفضل المبادئ المعروفة. باختصار، هذا يعني، عدم الإضرار. إذا كان بإمكانك العلاج بأساليب بسيطة، فجرّب هذه الأساليب أولاً. لكي يتخذ المريض قرارًا مستنيرًا تمامًا، يجب عليه / عليها فهم جميع مخاطر وفوائد الإجراء واحتمالية نجاحه. أولاً وقبل كل شيء، يقترح الدكتور ب العلاجات غير الجراحية للجميع. لذلك، يحاول تحقيق النتائج المرجوة للمريض بأساليب بسيطة، وإذا لم يتمكن من تحقيق النتائج المرجوة بأساليب بسيطة، فيبدأ بعد ذلك في التفكير في الجراحة.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
