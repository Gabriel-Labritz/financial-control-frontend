import { Github } from "lucide-react";
import ToogleThemeBtn from "../toogle_theme_btn/toogle_theme_btn";
import { Button } from "../ui/button";
import { SidebarTrigger } from "../ui/sidebar";
import Link from "next/link";
import DropdownUserAvatar from "@/components/dropdown_user_avatar/dropdown_user_avatar";

export default function MainHeader() {
  return (
    <header className="flex justify-between items-center w-full p-4 border-b">
      {/* LEFT */}
      <SidebarTrigger />
      {/* RIGHT */}
      <nav className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="rounded-full">
          <Link href="https://github.com/Gabriel-Labritz/financial-control-frontend">
            <Github />
            <span className="sr-only">accesse o projeto no github</span>
          </Link>
        </Button>
        <ToogleThemeBtn />
        <DropdownUserAvatar />
      </nav>
    </header>
  );
}
