export default function VideoThree() {
  return (
    <div>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-6">
        <div
          className="w-[360px] sm:w-[420px] flex-shrink-0 lg:w-1/3 h-[416px] my-9 rounded-[25px] bg-cover bg-center shadow-[0_10px_8px_0_#c0a062]"
          style={{ backgroundImage: "url('/3video/video-cover.webp')" }}
        >
          <a
            href="/"
            title="Doctor B on Newyork City Billboards, USA"
            className="block w-full h-full"
          ></a>
        </div>
        <div
          className="w-[360px] sm:w-[420px] flex-shrink-0 lg:w-1/3 h-[416px] my-9 rounded-[25px] bg-cover bg-center shadow-[0_10px_8px_0_#c0a062]"
          style={{ backgroundImage: "url('/3video/tlc.webp')" }}
        >
          <a
            href="/"
            title='Doctor B on TLC "Is This Me" TV Program'
            className="block w-full h-full"
          ></a>
        </div>
        <div
          className="w-[360px] sm:w-[420px] flex-shrink-0 lg:w-1/3 h-[416px] my-9 rounded-[25px] bg-cover bg-center shadow-[0_10px_8px_0_#c0a062]"
          style={{ backgroundImage: "url('/3video/fashionVideo.webp')" }}
        >
          <a
            href="/"
            title="Doctor B on Fashion TV"
            className="block w-full h-full"
          ></a>
        </div>
      </div>
    </div>
  );
}
