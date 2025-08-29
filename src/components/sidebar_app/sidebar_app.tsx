import { ChartArea, DollarSign, Home, Search } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "../ui/sidebar";
import Link from "next/link";

export default function SidebarApp() {
  const items = [
    {
      title: "Início",
      url: "/",
      icon: Home,
    },
    {
      title: "Transações",
      url: "#",
      icon: DollarSign,
    },
    {
      title: "Buscar",
      url: "#",
      icon: Search,
    },
  ];

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="flex items-center">
        <ChartArea size={25} color="var(--color-primary)" />
        <SidebarSeparator />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="font-sans font-semibold">
            Explorar
          </SidebarGroupLabel>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <Link href={item.url}>
                    <item.icon></item.icon>
                    <span className="font-sans font-medium">{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
