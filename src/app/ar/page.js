import Hero from "../../components/ar/Hero";
import Bout from "../../components/ar/Bout";
import Steps from "../../components/ar/Steps";
import VideoSwiper from "../../components/ar/VideoSwiper";
import ProcedureSwiper from "../../components/ar/ProcedureSwiper";
import ClinicImgs from "../../components/ar/ClinicImgs";
import Doctors from "../../components/ar/Doctors";
import ArtPieces from "../../components/ar/ArtPieces";
import Advantages from "../../components/ar/Advantages";
import Bout2 from "../../components/ar/Bout2";
import Recognitions from "../../components/ar/Recognitions";
import Strip from "../../components/ar/Strip";
import OperationForm from "../../components/ar/OperationForm";
import VideoThree from "../../components/ar/VideoThree";
import Footer from "../../components/ar/Footer";

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
