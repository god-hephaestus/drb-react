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
              Upoznajte pionira estetske hirurgije
              </h2>
              <p className="p-2 lg:text-left text-center">
              U medicini postoji princip: &quot;Ne-zlonamernost je verovatno najpoznatiji od principa. Ukratko to znači &quot;ne činiti štetu&quot;. Ako možete da lečite jednostavnim metodama, prvo isprobajte te metode. Da bi pacijent doneo potpuno informisanu odluku on/ona mora razumeti sve rizike i prednosti procedure i verovatnoću uspeha. Pre svega, Dr B predlaže svima nehiruške tretmane. Stoga, on pokušava da postigne željene rezultate pacijenata jednostavnim metodama, a ako ne može postići željene rezultate tim istim metodama, onda počinje da razmišlja o operaciji.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
