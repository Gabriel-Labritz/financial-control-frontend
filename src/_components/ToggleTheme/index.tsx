"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Sun, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";

export default function ToggleTheme() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative rounded-full transition-transform duration-300 ease-in-out active:scale-90"
        >
          <Moon className="absolute scale-100 rotate-0 transition-all duration-200 ease-in-out dark:scale-0 dark:-rotate-90" />
          <Sun className="scale-0 rotate-90 transition-all duration-200 ease-in-out dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Mudar tema da aplicação</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun />
          Claro
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon />
          Escuro
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <SunMoon />
          Sistema
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
