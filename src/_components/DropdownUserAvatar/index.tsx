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
import { getUserProfile } from "@/actions/user/user";

export default async function DropdownUserAvatar() {
  const result = await getUserProfile();
  if (!result.user) return;

  const { name, profileImageUrl } = result.user;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="hover:cursor-pointer">
        <UserAvatar srcImageUrl={profileImageUrl} userName={name} />
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
