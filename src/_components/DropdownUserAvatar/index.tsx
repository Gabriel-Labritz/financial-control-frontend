import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserAvatar from "../UserAvatar";
import { User } from "lucide-react";
import Link from "next/link";
import DropdownLogoutItem from "../DropdownLogoutItem";

export default function DropdownUserAvatar() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="hover:cursor-pointer">
        <UserAvatar />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <Link href="/profile">
          <DropdownMenuItem>
            <User />
            Perfil
          </DropdownMenuItem>
        </Link>
        <DropdownLogoutItem />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
