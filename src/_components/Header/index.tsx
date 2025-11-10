import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Github } from "lucide-react";
import Link from "next/link";
import DropdownUserAvatar from "../DropdownUserAvatar";
import ToggleTheme from "../ToggleTheme";

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center p-4">
      {/* LEFT */}
      <SidebarTrigger />

      {/* RIGHT */}
      <nav className="flex items-center gap-1">
        <Button variant="ghost" size="icon" className="rounded-full">
          <Link href="https://github.com/Gabriel-Labritz/financial-control-frontend">
            <Github />
            <span className="sr-only">Acesse o repositório do projeto</span>
          </Link>
        </Button>
        <ToggleTheme />
        <DropdownUserAvatar />
      </nav>
    </header>
  );
}
