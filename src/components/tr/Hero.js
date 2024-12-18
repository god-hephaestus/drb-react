import Image from "next/image";
import GradientButton from "../../components/GradientButton";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="h-[800px] lg:h-screen w-full relative overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover blur-sm"
          src="/herovideo.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/50 via-black/30 to-black/70"></div>

        <div className="relative mt-[35%] lg:mt-[10%] z-10 flex flex-col items-center text-center text-white gap-4 lg:gap-6">
          <p className="text-2xl font-light monument-font monument-heading">
            <span className="text-[#c0a062]">
            Sanatçılığı ve Uzmanlığı 
            </span><br />
            Discover
          </p>

          <h1 className="text-6xl md:text-7xl tracking-wide drop-shadow-lg monument-heading">
            Doktor B ile
          </h1>

          <Image
            aria-hidden
            src="/stars.webp"
            alt="Doctor B Ratings"
            width={520}
            height={120}
            sizes="(max-width: 768px) 350px, 520px"
          />

          <GradientButton></GradientButton>
        </div>
      </div>
    </div>
  );
}
