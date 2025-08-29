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
          <span className="flex gap-2 items-center">
            <User color="var(--color-foreground)" /> Perfil
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span className="flex gap-2 items-center">
            <LogOut color="var(--color-foreground)" /> Sair
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
