import Hero from "../../components/rs/Hero";
import Bout from "../../components/rs/Bout";
import Steps from "../../components/rs/Steps";
import VideoSwiper from "../../components/rs/VideoSwiper";
import ProcedureSwiper from "../../components/rs/ProcedureSwiper";
import ClinicImgs from "../../components/rs/ClinicImgs";
import Doctors from "../../components/rs/Doctors";
import ArtPieces from "../../components/rs/ArtPieces";
import Advantages from "../../components/rs/Advantages";
import Bout2 from "../../components/rs/Bout2";
import Recognitions from "../../components/rs/Recognitions";
import Strip from "../../components/rs/Strip";
import OperationForm from "../../components/rs/OperationForm";
import VideoThree from "../../components/rs/VideoThree";
import Footer from "../../components/rs/Footer";

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
