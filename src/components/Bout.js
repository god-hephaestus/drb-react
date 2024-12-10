export default function Bout() {
  return (
    <section className="w-full bg-[#111111] text-white px-[10%]">
      <div
        className="bg-no-repeat bg-center mx-auto h-[300px] lg:h-[400px]"
        style={{
          backgroundImage: 'url("/aboutBgMobile.webp")',
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <style>
          {`
                @media (min-width: 1024px) {
                  .bg-center {
                    background-image: url("/aboutBg.webp") !important;
                    background-size: cover;
                  }
                }
              `}
        </style>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div className="pt-[10%] lg:ps-[10%]">
              <h2 className="text-4xl text-[#c0a062] font-bold mb-5 lg:text-left text-center ">
                About Doctor B
              </h2>
              <p className="text-left lg:text-left md:text-center">
                Experience a new level of aesthetic excellence with Doctor
                Bulent Cihantimur, a world-renowned plastic surgeon who is
                dedicated to enhancing your natural beauty and providing
                exceptional cosmetic solutions. With years of experience and a
                passion for innovation, Doctor Bulent Cihantimur has earned
                global recognition for his artistic approach and transformative
                results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
