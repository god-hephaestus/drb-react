export default function Bout() {
  return (
    <section className="w-full bg-[#111111] text-white lg:px-[10%]">
      <div
        className="container bg-no-repeat bg-center mx-auto about pb-10 lg:h-[400px]"
        style={{
          backgroundImage: 'url("/aboutBgMobile.webp")',
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <style>
          {`
                @media (min-width: 1024px) {
                  .about {
                    background-image: url("/aboutBg.webp") !important;
                    background-size: cover;
                  }
                }
              `}
        </style>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div className="pt-[10%] lg:ps-[10%]">
              <h2 className="text-4xl ps-2 text-[#c0a062] font-bold mb-5 lg:text-left text-center ">
                Doktor B Hakkında
              </h2>
              <p className="lg:text-left text-center p-2">
              Kendini doğal güzelliğinizi geliştirmeye ve olağanüstü kozmetik çözümler sunmaya adamış, 
              dünyaca ünlü bir plastik cerrah olan Doktor Bülent Cihantimur ile mükemmel bir estetik seviyesini deneyimleyin. 
              Yılların deneyimi ve yenilik tutkusuyla Doktor Bülent Cihantimur, sanatsal yaklaşımı ve dönüştürücü sonuçlarıyla 
              dünya çapında tanınırlık kazanmıştır.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
