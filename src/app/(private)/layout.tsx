import MainHeader from "@/components/main_header/main_header";
import SidebarApp from "@/components/sidebar_app/sidebar_app";
import { SidebarProvider } from "@/components/ui/sidebar";
import type { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "FinanCash",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <SidebarApp />
      <main className="w-full">
        <MainHeader />
        {children}
      </main>
    </SidebarProvider>
  );
}
