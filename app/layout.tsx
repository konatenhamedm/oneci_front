import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Tuto from "@/components/Tuto";
import LoginModal from "@/components/modals/LoginModal";
import ErrorNotFoundModal from "@/components/errors/ErrorNotFoundModal";
import VerificationModal from "@/components/modals/VerificationModal";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ONCECI",
  description: "Plateform de demande documents administratifs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="container bg-white  max-w-5xl border-double border-4 border-[#f0a020]">
          <main className="flex min-h-screen flex-col items-center justify-between ">
            <Header />
            <div className="text-neutral-800 py-6 mt-auto relative overflow-hidden flex flex-col justify-around w-full  h-[440px] bg-white p-3 px-6">
              {children}
            </div>
            <Footer />
            <LoginModal />
            <VerificationModal />
            <Tuto />
            <ErrorNotFoundModal />
          </main>
        </div>
      </body>
    </html>
  );
}
