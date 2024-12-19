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
              Познакомьтесь с пионером эстетической хирургии
              </h2>
              <p className="p-2 lg:text-left text-center">
              В медицине есть принцип: «Непричинение вреда», пожалуй, самый известный из принципов. Короче говоря, 
              это означает «не причинять вреда». Если вы можете лечить простыми методами, сначала попробуйте эти методы. 
              Чтобы пациент мог принять полностью обоснованное решение, он/она должен понимать все риски и преимущества 
              процедуры, а также вероятность успеха. Прежде всего, доктор Б. предлагает всем безоперационные методы лечения. 
              Поэтому он пытается достичь желаемых результатов пациента с помощью простых методов, а если он не может достичь 
              желаемых результатов с помощью простых методов, он начинает рассматривать возможность хирургического вмешательства.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
