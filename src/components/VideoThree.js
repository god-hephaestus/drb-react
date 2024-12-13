import Image from "next/image";

export default function VideoThree() {
  return (
    <div className="container mx-auto flex items-center justify-center">
      <div className="w-full lg:w-1/3 rounded-[25px]">
        <Image src={"/"} alt="" fill>
          <a href="/"></a>
        </Image>
      </div>
    </div>
  );
}
