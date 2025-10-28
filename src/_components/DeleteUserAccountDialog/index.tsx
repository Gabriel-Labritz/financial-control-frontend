"use client";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { LoaderCircle } from "lucide-react";
import { useTransition } from "react";

export default function DeleteUserAccountDialog() {
  const [isPending, startTransaction] = useTransition();

  const handleDeleteTransaction = () => {
    startTransaction(async () => {
      // request para deletar a conta aqui!
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
          onClick={handleDeleteTransaction}
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
