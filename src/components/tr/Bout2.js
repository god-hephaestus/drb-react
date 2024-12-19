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
                Estetik Cerrahi&apos;nin Öncüsü ile Tanışın
              </h2>
              <p className="p-2 lg:text-left text-center">
              Bilinen kimi tıp ilkeleri vardır, bunlardan en bilineni ise zarar vermeme üzerine olandır. 
              Bu zarar vermeme ilkesi doğrultusunda, basit yöntemlerle tedavi gerçekleşebiliyorsa önce o 
              yöntemler denenmeli. Bir hastanın tamamen bilgilendirilmiş halde karar verebilmesi için, 
              prosedürün tüm risklerini, faydalarını ve başarı olasılığını anlaması gerekir. Doktor B, 
              öncelikli olarak herkese ameliyatsız tedavileri öneriyor. Bu nedenle kendisi de en basit 
              yöntemlerle hastasının istediği sonuca ulaşmaya çalışır ancak basit yöntemler hastanın 
              istediği sonuca ulaşmasına yardımcı olmazsa ameliyat planlanmaya başlanabilir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
