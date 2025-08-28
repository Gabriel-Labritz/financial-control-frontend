import { LogOut, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import UserAvatar from "../user_avatar/user_avatar";

export default function DropdownUserAvatar() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="hover:cursor-pointer">
        <UserAvatar />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-4">
        <DropdownMenuLabel className="font-semibold">Conta</DropdownMenuLabel>
        <DropdownMenuItem>
          Perfil <User className="ml-auto" color="var(--color-foreground)" />
        </DropdownMenuItem>
        <DropdownMenuItem>
          Sair <LogOut className="ml-auto" color="var(--color-foreground)" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
