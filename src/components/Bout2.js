export default function Bout2() {
  return (
    <section className="w-full bg-[#111111] text-white ">
      <div
        className="container bg-no-repeat bg-center mx-auto about2 pb-10 lg:h-[400px]"
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
            <div className="pt-[10%] lg:ps-[10%]">
              <h2 className="text-4xl text-[#c0a062] font-bold mb-5 lg:text-left text-center ">
                Meet The Pioneer in Aesthetic Surgery
              </h2>
              <p className="p-2 lg:text-left text-center">
                There is a principle in medicine: Non-maleficence is probably
                the best known of the principles. In short, it means, “to do no
                harm.” If you can treat with simple methods, try those methods
                first. In order for a patient to make a fully informed decision,
                she/he must understand all risks and benefits of the procedure
                and the likelihood of success. First of all, Dr B. suggests
                non-surgical treatments to everyone. Therefore, he tries to
                achieve the patient’s desired results with simple methods, and
                if he cannot achieve the desired results with simple methods, he
                then begin considering surgery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
