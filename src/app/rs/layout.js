import { Montserrat } from "next/font/google";
import "../globals.css";
import Script from "next/script";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Otkrijte stručnost i umeće Doktor B-ja",
  description: "Otkrijte stručnost i umeće Doktor B-ja",
};

export default function RootLayout({ children }) {
  return (
    <html lang="rs">
      <body className={`${montserrat.variable} antialiased`}>
        {children}

        <Script
          src="https://cdn.cookie-script.com/s/0cb95ba29af25e4bb81af76838a4fe56.js"
          strategy="lazyOnload"
          type="text/javascript"
          charset="UTF-8"
        />
      </body>
    </html>
  );
}
