import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FinanCash | Autenticação",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="border border-yellow-500 flex w-full min-h-screen overflow-x-hidden p-4">
      <div className="flex-1 lg:max-w-1/2">
        <div className="w-full min-h-full flex flex-col justify-center items-center">
          {children}
        </div>
      </div>
      <div className="hidden w-full max-w-1/2 lg:flex">
        <div className="w-full min-h-full flex justify-center items-center bg-gray-100 rounded-md">
          Image here!
        </div>
      </div>
    </main>
  );
}
