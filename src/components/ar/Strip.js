import PopupModal from "./PopupModal";

export default function Strip() {
  return (
    <section className="bg-[#151515] py-5">
      <div className="container mx-auto px-4 lg:px-[10%]">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full lg:w-2/3 mb-4 lg:mb-0">
            <h4 className="text-xl text-[#c0a062] font-bold mb-2">
            احصل على استشارتك اليوم!
            </h4>
            <p className="text-white text-md">
            احصل على استشارتك اليوم واقترب خطوة من أحلامك.
            </p>
          </div>
          <div className="w-full lg:w-1/3 flex justify-end">
            <PopupModal></PopupModal>
          </div>
        </div>
      </div>
    </section>
  );
}