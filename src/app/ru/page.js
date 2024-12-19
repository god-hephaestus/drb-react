import Hero from "../../components/ru/Hero";
import Bout from "../../components/ru/Bout";
import Steps from "../../components/ru/Steps";
import VideoSwiper from "../../components/ru/VideoSwiper";
import ProcedureSwiper from "../../components/ru/ProcedureSwiper";
import ClinicImgs from "../../components/ru/ClinicImgs";
import Doctors from "../../components/ru/Doctors";
import ArtPieces from "../../components/ru/ArtPieces";
import Advantages from "../../components/ru/Advantages";
import Bout2 from "../../components/ru/Bout2";
import Recognitions from "../../components/ru/Recognitions";
import Strip from "../../components/ru/Strip";
import OperationForm from "../../components/ru/OperationForm";
import VideoThree from "../../components/ru/VideoThree";
import Footer from "../../components/ru/Footer";


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
