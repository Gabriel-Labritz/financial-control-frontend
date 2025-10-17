import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { ChartArea } from "lucide-react";
import SidebarNav from "../SidebarNav";

export default function AppSidebar() {
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
              <SidebarNav />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
