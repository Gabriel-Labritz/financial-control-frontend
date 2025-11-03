"use client";

import { logOut } from "@/actions/auth/log-out";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { LoaderCircle, LogOut } from "lucide-react";
import { useTransition } from "react";

export default function DropdownLogoutItem() {
  const [isPending, startTransaction] = useTransition();

  const handleLogoutUser = async () => {
    startTransaction(async () => {
      await logOut();
    });
  };

  return (
    <DropdownMenuItem onClick={handleLogoutUser}>
      {isPending ? (
        <>
          <LoaderCircle className="animate-spin" />
          Aguarde...
        </>
      ) : (
        <>
          <LogOut /> Sair
        </>
      )}
    </DropdownMenuItem>
  );
}
