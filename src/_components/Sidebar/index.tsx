import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ChartArea, Home, Landmark, Search, Settings } from "lucide-react";
import Link from "next/link";

export default function AppSidebar() {
  const items = [
    {
      title: "Início",
      url: "#",
      icon: Home,
    },
    {
      title: "Transações",
      url: "#",
      icon: Landmark,
    },
    {
      title: "Buscar",
      url: "#",
      icon: Search,
    },
    {
      title: "Configurações",
      url: "#",
      icon: Settings,
    },
  ];
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center gap-2 select-none">
          <div className="flex justify-center items-center size-8 shrink-0 bg-primary rounded-lg">
            <ChartArea />
          </div>
          <div className="flex flex-col overflow-hidden whitespace-nowrap">
            <span className="text-sm font-semibold tracking-tight">
              FinanCash
            </span>
            <span className="text-xs text-muted-foreground tracking-tight transition-opacity duration-300 sidebar-collapsed:opacity-0">
              Gerencie suas finanças
            </span>
          </div>
        </div>
        <Separator />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navegar</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon color="var(--color-primary)" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
