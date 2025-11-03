"use client";

import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { Home, Landmark, Settings } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SidebarNav() {
  const router = useRouter();

  return (
    <>
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <Link href="/" onMouseEnter={() => router.prefetch("/")}>
            <Home color="var(--color-primary)" />
            <span>Início</span>
          </Link>
        </SidebarMenuButton>
        <SidebarMenuButton asChild>
          <Link
            href="/transactions"
            onMouseEnter={() => router.prefetch("/transactions")}
          >
            <Landmark color="var(--color-primary)" />
            <span>Transações</span>
          </Link>
        </SidebarMenuButton>
        <SidebarMenuButton asChild>
          <Link
            href="/profile"
            onMouseEnter={() => router.prefetch("/profile")}
          >
            <Settings color="var(--color-primary)" />
            <span>Conta</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </>
  );
}
