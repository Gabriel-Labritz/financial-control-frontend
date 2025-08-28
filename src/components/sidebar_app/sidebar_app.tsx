import { Sidebar, SidebarHeader, SidebarSeparator } from "../ui/sidebar";

export default function SidebarApp() {
  return (
    <Sidebar>
      <SidebarHeader className="flex items-center">
        User Avatar
        <SidebarSeparator />
      </SidebarHeader>
    </Sidebar>
  );
}
