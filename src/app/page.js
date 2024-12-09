import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="h-screen w-full relative overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover blur-sm"
          src="/herovideo.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Darkening Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/50 via-black/30 to-black/70"></div>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-center text-center text-white space-y-4">
          {/* Logo */}
          <Image
            aria-hidden
            src="/doctor-b-logo.webp"
            alt="Doctor B Logo"
            width={120}
            height={75}
          />

          {/* Tagline */}
          <p className="text-xl font-light">Discover</p>
          <p className="text-xl font-light">The Expertise and Artistry of</p>

          {/* Hero Title */}
          <h1 className="text-6xl md:text-7xl font-bold tracking-wide drop-shadow-lg">
            Doctor B
          </h1>

          {/* Ratings */}
          <Image
            aria-hidden
            src="/stars.webp"
            alt="Doctor B Ratings"
            width={350}
            height={75}
          />

          {/* Call to Action */}
          <button
            type="button"
            className="mt-6 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-10 py-3 shadow-lg"
          >
            Get a Quote
          </button>
        </div>
      </div>
    </main>
  );
}
