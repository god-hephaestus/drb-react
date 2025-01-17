import Image from "next/image";

export default function Recognitions() {
  return (
    <div className="w-full my-9">
      <div className="container mx-auto lg:px-[10%]">
        <h6 className="text-[#c0a062] text-center text-4xl mb-9">Признания</h6>
        <div className="flex justify-center items-center flex-wrap">
          <div className="lg:w-1/4 w-1/2 flex flex-col justify-center items-center py-4">
            <Image
              src={"/icons/amenities1Icon.webp"}
              alt="recognition icon"
              width={64}
              height={64}
            />
            <p className="text-lg font-semibold p-2 text-center text-white">
              Оскар
            </p>
          </div>
          <div className="lg:w-1/4 w-1/2 flex flex-col justify-center items-center py-4">
            <Image
              src={"/icons/amenities2Icon.webp"}
              alt="recognition icon"
              width={64}
              height={64}
            />
            <p className="text-lg font-semibold p-2 text-center text-white">
              Премия за выдающиеся достижения
            </p>
          </div>
          <div className="lg:w-1/4 w-1/2 flex flex-col justify-center items-center py-4">
            <Image
              src={"/icons/amenities3Icon.webp"}
              alt="recognition icon"
              width={64}
              height={64}
            />
            <p className="text-lg font-semibold p-2 text-center text-white">
              Врач Года
            </p>
          </div>
          <div className="lg:w-1/4 w-1/2 flex flex-col justify-center items-center py-4">
            <Image
              src={"/icons/amenities4Icon.webp"}
              alt="recognition icon"
              width={64}
              height={64}
            />
            <p className="text-lg font-semibold p-2 text-center text-white">
              Премия за выдающийся вклад
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
