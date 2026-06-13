import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://klimbr.in"),
  title: {
    default: "Klimbr — AI-Powered Digital Marketing & SEO Automation",
    template: "%s | Klimbr",
  },
  description:
    "An AI-powered digital marketing & SEO automation agency. Rank higher, generate quality leads, and build a dominant online presence.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
