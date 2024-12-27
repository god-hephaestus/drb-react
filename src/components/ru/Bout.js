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
                О Докторе Б
              </h2>
              <p className="lg:text-left text-center p-2">
                Откройте для себя новый уровень эстетического совершенства
                вместе с доктором Бюлентом Джихантимуром, всемирно известным
                пластическим хирургом, который стремится подчеркнуть вашу
                естественную красоту и предлагает исключительные косметические
                решения. Благодаря многолетнему опыту и страсти к инновациям,
                доктор Бюлент Джихантимур заслужил мировое признание за свой
                художественный подход и преобразующие результаты.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
