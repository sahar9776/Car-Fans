import "./globals.css";
import localFont from "next/font/local";
import Header from "@/components/Header";
import PTransition from "@/components/PTransition";
import TotalContext from "@/context/TotalContext";

const vazirFont = localFont({
  src: "../public/fonts/Vazir.woff2",
});

export const metadata = {
  title: "Car Fans",
  description: "Anyone who loves excitement should register and test themselves!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={vazirFont.className}>
        <TotalContext>
          <Header />
          <PTransition>
            {children}
          </PTransition>
        </TotalContext>
      </body>
    </html>
  );
}
