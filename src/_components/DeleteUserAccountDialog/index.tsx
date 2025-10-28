"use client";

import { deleteUserAccount } from "@/actions/user/user";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { LoaderCircle } from "lucide-react";
import { useTransition } from "react";
import { toast } from "sonner";

export default function DeleteUserAccountDialog() {
  const [isPending, startTransaction] = useTransition();

  const handleDeleteUserAccount = () => {
    startTransaction(async () => {
      const result = await deleteUserAccount();

      if (!result.success) {
        toast.error(
          result.error ||
            "Ocorreu um erro ao excluir sua conta, tente novamente."
        );
      }
    });
  };
  return (
    <>
      <AlertDialogTitle>
        Você tem certeza que gostaria de excluir sua conta?
      </AlertDialogTitle>
      <AlertDialogDescription>
        Uma vez que sua conta da FinanCash for excluída, ela não estará mais
        acessível para você. Essa ação não pode ser desfeita.
      </AlertDialogDescription>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancelar</AlertDialogCancel>
        <AlertDialogAction
          onClick={handleDeleteUserAccount}
          disabled={isPending}
        >
          {isPending ? (
            <>
              <LoaderCircle className="animate-spin" />
              Aguarde...
            </>
          ) : (
            "Continuar"
          )}
        </AlertDialogAction>
      </AlertDialogFooter>
    </>
  );
}
