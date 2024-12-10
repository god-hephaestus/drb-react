import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="h-screen w-full relative overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover blur-sm"
          src="/herovideo.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/50 via-black/30 to-black/70"></div>

        <div className="relative z-10 flex flex-col items-center text-center text-white gap-4 lg:gap-6">
          <Image
            aria-hidden
            src="/doctor-b-logo.webp"
            alt="Doctor B Logo"
            width={180}
            height={155}
            className="pt-[3%]"
          />

          <p className="text-2xl  font-light monument-font monument-heading">
            Discover <br />
            <span className="text-[#c0a062]">
              The Expertise and Artistry of
            </span>
          </p>

          <h1 className="text-6xl md:text-7xl tracking-wide drop-shadow-lg monument-heading">
            Doctor B
          </h1>

          <Image
            aria-hidden
            src="/stars.webp"
            alt="Doctor B Ratings"
            width={520}
            height={120}
            sizes="(max-width: 768px) 350px, 520px"
          />

          <button
            type="button"
            className="mt-6 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-10 py-3 shadow-lg monument-heading"
          >
            Get a Quote
          </button>
        </div>
      </div>
    </div>
  );
}
