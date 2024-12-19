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
              Rreth Doktor B
              </h2>
              <p className="lg:text-left text-center p-2">
              Përjetoni një nivel të ri të përsosmërisë estetike me Doktor Bülent Cihantimur, një kirurg 
              plastike i njohur ndërkombëtarisht, i dedikuar për të përmirësuar bukurinë tuaj natyrale dhe 
              për të ofruar zgjidhje estetike të jashtëzakonshme. Me vite përvojë dhe një pasion të thellë 
              për inovacionin, Dr. Bülent Cihantimur ka fituar famë ndërkombëtare për qasjen e tij artistike 
              dhe rezultatet e jashtëzakonshme që sjell.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
