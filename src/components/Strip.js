export default function Strip() {
  return (
    <section className="bg-[#151515] py-5">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full lg:w-2/3 mb-4 lg:mb-0">
            <h4 className="text-xl text-[#c0a062] font-bold mb-2">
              Get your consultation today!
            </h4>
            <p className="text-white text-md">
              Get your consultation today and get one step closer to your
              dreams.
            </p>
          </div>
          <div className="w-full lg:w-1/3 flex justify-end">
            <button
              className="px-5 py-3 text-white bg-[#c0a062] font-semibold rounded-md hover:bg-[#a89055] transition-all"
              title="Book Now"
            >
              Book a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}