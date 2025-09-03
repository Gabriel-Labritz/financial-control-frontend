import type { Metadata } from "next";
import Image from "next/image";
import ScreenSvg from "@/assets/screen.svg";
export const metadata: Metadata = {
  title: "FinanCash | Autenticação",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex w-full min-h-screen overflow-x-hidden p-4 font-sans">
      <div className="flex-1 xl:max-w-1/3">
        <div className="w-full min-h-full flex flex-col justify-center items-center">
          {children}
        </div>
      </div>
      <div className="hidden w-full flex-1 xl:flex">
        <div className="w-full min-h-full flex justify-end items-center bg-gray-100 rounded-md">
          <Image
            src={ScreenSvg}
            alt="ilustração de demonstração do sistema."
            className="object-contain"
          />
        </div>
      </div>
    </main>
  );
}
