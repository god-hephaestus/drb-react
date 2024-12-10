import Hero from "../components/Hero";
import Bout from "../components/Bout";
import VideoSwiper from "../components/VideoSwiper";

export default function Home() {
  return (
    <main style={{ backgroundImage: 'url("/bodyBg.webp")' }}>
      <Hero></Hero>
      <Bout></Bout>
      <VideoSwiper></VideoSwiper>
    </main>
  );
}
