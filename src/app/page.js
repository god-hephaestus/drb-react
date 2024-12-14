import Hero from "../components/Hero";
import Bout from "../components/Bout";
import Steps from "../components/Steps";
import VideoSwiper from "../components/VideoSwiper";
import ProcedureSwiper from "../components/ProcedureSwiper";
import ClinicImgs from "../components/ClinicImgs";
import Doctors from "../components/Doctors";
import ArtPieces from "../components/ArtPieces";
import Advantages from "../components/Advantages";
import Bout2 from "../components/Bout2";
import Recognitions from "../components/Recognitions";
import Strip from "../components/Strip";
import VideoThree from "../components/VideoThree";

export default function Home() {
  return (
    <main
      style={{
        backgroundImage: 'url("/bodyBg.webp")',
        backgroundSize: "contain",
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
      }}
    >
      <Hero></Hero>
      <Bout></Bout>
      <VideoSwiper></VideoSwiper>
      <Steps></Steps>
      <ProcedureSwiper></ProcedureSwiper>
      <ClinicImgs></ClinicImgs>
      <Doctors></Doctors>
      <ArtPieces></ArtPieces>
      <Advantages></Advantages>
      <Bout2></Bout2>
      <Recognitions></Recognitions>
      <Strip></Strip>
      <VideoThree></VideoThree>
    </main>
  );
}
