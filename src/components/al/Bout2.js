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
              Njihuni me Pionierin e Kirurgjisë Estetike
              </h2>
              <p className="p-2 lg:text-left text-center">
              Ka një parim në mjekësi: &quot;Non-maleficence&quot; është ndoshta parimi më i njohur. 
              Në përkthim të thjeshtë, kjo do të thotë &quot;të mos dëmtohet.&quot; Nëse mund të trajtoni 
              me metoda të thjeshta, provoni ato metoda të para. Për të marrë një vendim, pacienti 
              duhet të ketë të gjithë informacionin e nevojshëm, veçanërisht për rreziqet e mundshme 
              dhe përfitimet e ndërhyrjes. Dr. B. gjithmonë rekomandon trajtimet jo-kirurgjikale si 
              opsionin e parë. Ai synon të arrijë rezultatet e dëshiruara të pacientit duke përdorur 
              metoda të thjeshta, dhe vetëm nëse këto metoda nuk japin rezultatet e dëshiruara, 
              ai merr ne konsideratë kirurgjinë.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
