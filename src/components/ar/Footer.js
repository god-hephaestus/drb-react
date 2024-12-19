export default function Footer() {
  return (
    <section id="contact" className="bg-[#151515] py-10">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white">المراكز الطبية</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          <div className="hidden lg:block"></div>

          <div className="col-span-1 lg:col-span-1 text-center text-white">
            <b>Estetik International Quasar</b>
            <br />
            Fulya Mah. B&uuml;y&uuml;kdere Cad. Quasar No:76/80
            <br />
            Mecidiyek&ouml;y / İstanbul, 34394 Turkey
            <br />
            <br />
          </div>

          <div className="col-span-1 lg:col-span-1 text-center text-white">
            <b>DoctorB Clinic</b>
            <br />
            Fulya, Mehmet&ccedil;ik Cd. No:61B
            <br />
            Şişli / İstanbul, 34365
            <br />
            Turkey
            <br />
            <br />
          </div>

          <div className="col-span-1 lg:col-span-1 text-center text-white">
            <b>Estetik International Bursa</b>
            <br />
            Barış Mah. İzmir Yolu Cad. No:206
            <br />
            Nilüfer / Bursa, 16140
            <br />
            Turkey
            <br />
            <br />
          </div>

          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
}
