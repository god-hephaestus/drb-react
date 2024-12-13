import Image from "next/image";

export default function Advantages() {
  return (
    <div className="w-full my-9">
      <div className="container mx-auto">
        <h3 className="text-[#c0a062] text-center text-4xl mb-9">
          Why Choose Dr B
        </h3>
        <div className="flex justify-center items-center flex-wrap">
          <div className="lg:w-1/3 w-1/2 flex flex-col justify-center items-center py-4">
            <Image
              src={"/icons/adv-1.svg"}
              alt="advantage icon"
              width={64}
              height={64}
            />
            <p className="text-lg font-semibold py-2">
              30+ Years Of Experience
            </p>
          </div>
          <div className="lg:w-1/3 w-1/2 flex flex-col justify-center items-center py-4">
            <Image
              src={"/icons/adv-2.svg"}
              alt="advantage icon"
              width={64}
              height={64}
            />
            <p className="text-lg font-semibold py-2">World-renowned Doctor</p>
          </div>
          <div className="lg:w-1/3 w-1/2 flex flex-col justify-center items-center py-4">
            <Image
              src={"/icons/adv-3.svg"}
              alt="advantage icon"
              width={64}
              height={64}
            />
            <p className="text-lg font-semibold py-2">Golden Bistoury Awards</p>
          </div>
          <div className="lg:w-1/3 w-1/2 flex flex-col justify-center items-center py-4">
            <Image
              src={"/icons/adv-4.svg"}
              alt="advantage icon"
              width={64}
              height={64}
            />
            <p className="text-lg font-semibold py-2">Top Medical Standards</p>
          </div>
          <div className="lg:w-1/3 w-1/2 flex flex-col justify-center items-center py-4">
            <Image
              src={"/icons/adv-5.svg"}
              alt="advantage icon"
              width={64}
              height={64}
            />
            <p className="text-lg font-semibold py-2">
              Patented Special Techniques
            </p>
          </div>
          <div className="lg:w-1/3 w-1/2 flex flex-col justify-center items-center py-4">
            <Image
              src={"/icons/adv-6.svg"}
              alt="advantage icon"
              width={64}
              height={64}
            />
            <p className="text-lg font-semibold py-2">
              The Best Medical Center in Turkey
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
