import MainHeader from "@/components/main_header/main_header";
import SidebarApp from "@/components/sidebar_app/sidebar_app";
import { SidebarProvider } from "@/components/ui/sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FinanCash",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <SidebarApp />
      <main className="w-full">
        <MainHeader />
        {children}
      </main>
    </SidebarProvider>
  );
}
