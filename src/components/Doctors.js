import Image from "next/image";

export default function Doctors() {
  return (
    <div className="pb-12">
      <h3 className="text-4xl text-[#c0a062] font-semibold text-center mt-8">
        Meet Doctor B Team
      </h3>
      <div className="container mx-auto mt-8 mb-24 gap-8 shadow-lg flex flex-col lg:flex-row justify-center items-center">
        <div className="mb-32 lg:mb-0 relative w-full lg:w-1/3 flex flex-col bg-gradient-to-b from-transparent to-[#c0a062] max-w-[400px] h-[400px] rounded-[30px] justify-center items-center">
          <Image
            src="/doctors/team1Doctor.webp"
            alt="Doctor B Logo"
            fill
            className="pt-[3%] object-contain"
          />
          <div className="absolute -bottom-12 text-center border-4 border-transparent bg-[#151515] w-[80%] h-[30%] rounded-[30px]">
            <h5 className="text-xl font-semibold">Bülent Cihantimur MD</h5>
            <p className="text-md py-2 ">
              Aesthetics, Plastic and Reconstructive Surgeon
            </p>
            <div className="flex justify-around">
              <div className="flex flex-col justify-center items-center">
                <div className="text-black rounded-md bg-[#c0a062] w-16 h-16 flex items-center justify-center">
                  <span className="font-bold">30+</span>
                </div>
                <span className="text-[#c0a062] font-bold">
                  Years of <br /> experience
                </span>
              </div>

              <div className="flex flex-col justify-center items-center">
                <div className="text-black rounded-md bg-[#c0a062] w-16 h-16 flex items-center justify-center">
                  <span className="font-bold">15000+</span>
                </div>
                <span className="text-[#c0a062] font-bold">
                  Operations <br /> done
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-32 lg:mb-0 relative w-full lg:w-1/3 flex flex-col bg-gradient-to-b from-transparent to-[#c0a062] max-w-[400px] h-[400px] rounded-[30px] justify-center items-center">
          <Image
            src="/doctors/team1Doctor.webp"
            alt="Doctor B Logo"
            fill
            className="pt-[3%] object-contain"
          />
          <div className="absolute -bottom-12 text-center border-4 border-transparent bg-[#151515] w-[80%] h-[30%] rounded-[30px]">
            <h5 className="text-xl font-semibold">Bülent Cihantimur MD</h5>
            <p className="text-md py-2 ">
              Aesthetics, Plastic and Reconstructive Surgeon
            </p>
            <div className="flex justify-around">
              <div className="flex flex-col justify-center items-center">
                <div className="text-black rounded-md bg-[#c0a062] w-16 h-16 flex items-center justify-center">
                  <span className="font-bold">30+</span>
                </div>
                <span className="text-[#c0a062] font-bold">
                  Years of <br /> experience
                </span>
              </div>

              <div className="flex flex-col justify-center items-center">
                <div className="text-black rounded-md bg-[#c0a062] w-16 h-16 flex items-center justify-center">
                  <span className="font-bold">15000+</span>
                </div>
                <span className="text-[#c0a062] font-bold">
                  Operations <br /> done
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-32 lg:mb-0 relative w-full lg:w-1/3 flex flex-col bg-gradient-to-b from-transparent to-[#c0a062] max-w-[400px] h-[400px] rounded-[30px] justify-center items-center">
          <Image
            src="/doctors/team1Doctor.webp"
            alt="Doctor B Logo"
            fill
            className="pt-[3%] object-contain"
          />
          <div className="absolute -bottom-12 text-center border-4 border-transparent bg-[#151515] w-[80%] h-[30%] rounded-[30px]">
            <h5 className="text-xl font-semibold">Bülent Cihantimur MD</h5>
            <p className="text-md py-2 ">
              Aesthetics, Plastic and Reconstructive Surgeon
            </p>
            <div className="flex justify-around">
              <div className="flex flex-col justify-center items-center">
                <div className="text-black rounded-md bg-[#c0a062] w-16 h-16 flex items-center justify-center">
                  <span className="font-bold">30+</span>
                </div>
                <span className="text-[#c0a062] font-bold">
                  Years of <br /> experience
                </span>
              </div>

              <div className="flex flex-col justify-center items-center">
                <div className="text-black rounded-md bg-[#c0a062] w-16 h-16 flex items-center justify-center">
                  <span className="font-bold">15000+</span>
                </div>
                <span className="text-[#c0a062] font-bold">
                  Operations <br /> done
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
