import { ChartArea } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FinanCash | Autenticar",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" flex min-h-screen overflow-hidden">
      {/* LEFT */}
      <div className="flex flex-col items-center justify-center w-full xl:w-[35%] px-4 xl:px-8">
        {children}
      </div>

      {/* RIGHT */}
      <div className="hidden xl:flex items-center justify-center xl:w-[65%] bg-[url('./assets/auth_image_background.png')] bg-cover bg-center h-screen">
        <div className="flex items-center select-none">
          <ChartArea className="size-22" />
          <h2 className="text-5xl font-bold tracking-tight text-foreground">
            FinanCash
          </h2>
        </div>
      </div>
    </div>
  );
}
