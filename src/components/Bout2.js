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
                Meet The Pioneer in Aesthetic Surgery
              </h2>
              <p className="p-2 lg:text-left text-center">
                Probably one of the best known principles in medicine is
                &quot;Non-maleficence&quot;, which simply means &quot;do no
                harm.&quot; The idea is to always seek the most gentle approach
                first. In order for a patient to make a fully informed decision,
                they must understand all risks and benefits of the procedure and
                the likelihood of success. Dr. B. always recommends non-surgical
                treatments as the first option for patients. His goal is to help
                you achieve the results you desire using the simplest, least
                invasive methods. If those methods don&apos;t achieve the
                desired results, only then will surgery be considered. This
                ensures you&apos;re always treated with care, minimizing risks
                while maximizing your beauty.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
