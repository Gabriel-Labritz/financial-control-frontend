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
      <DropdownMenuContent className="mr-4 font-sans">
        <DropdownMenuLabel>Conta</DropdownMenuLabel>
        <DropdownMenuItem className="font-medium font-sans text-[12px]">
          <User /> Perfil
        </DropdownMenuItem>
        <DropdownMenuItem className="font-medium font-sans text-[12px]">
          <LogOut /> Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
