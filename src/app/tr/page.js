import Hero from "../../components/tr/Hero";
import Bout from "../../components/tr/Bout";
import Steps from "../../components/tr/Steps";
import VideoSwiper from "../../components/tr/VideoSwiper";
import ProcedureSwiper from "../../components/tr/ProcedureSwiper";
import ClinicImgs from "../../components/tr/ClinicImgs";
import Doctors from "../../components/tr/Doctors";
import ArtPieces from "../../components/tr/ArtPieces";
import Advantages from "../../components/tr/Advantages";
import Bout2 from "../../components/tr/Bout2";
import Recognitions from "../../components/tr/Recognitions";
import Strip from "../../components/tr/Strip";
import OperationForm from "../../components/tr/OperationForm";
import VideoThree from "../../components/tr/VideoThree";
import Footer from "../../components/tr/Footer";


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
