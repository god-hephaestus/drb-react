import Hero from "../components/Hero";
import Bout from "../components/Bout";
import Steps from "../components/Steps";
import VideoSwiper from "../components/VideoSwiper";
import ProcedureSwiper from "../components/ProcedureSwiper";

export default function Home() {
  return (
    <main
      style={{
        backgroundImage: 'url("/bodyBg.webp")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Hero></Hero>
      <Bout></Bout>
      <VideoSwiper></VideoSwiper>
      <Steps></Steps>
      <ProcedureSwiper></ProcedureSwiper>
    </main>
  );
}
