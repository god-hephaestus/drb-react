import Hero from "../../components/al/Hero";
import Bout from "../../components/al/Bout";
import Steps from "../../components/al/Steps";
import VideoSwiper from "../../components/al/VideoSwiper";
import ProcedureSwiper from "../../components/al/ProcedureSwiper";
import ClinicImgs from "../../components/al/ClinicImgs";
import Doctors from "../../components/al/Doctors";
import ArtPieces from "../../components/al/ArtPieces";
import Advantages from "../../components/al/Advantages";
import Bout2 from "../../components/al/Bout2";
import Recognitions from "../../components/al/Recognitions";
import Strip from "../../components/al/Strip";
import OperationForm from "../../components/al/OperationForm";
import VideoThree from "../../components/al/VideoThree";
import Footer from "../../components/al/Footer";

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
      <OperationForm></OperationForm>
      <VideoThree></VideoThree>
      <Footer></Footer>
    </main>
  );
}
