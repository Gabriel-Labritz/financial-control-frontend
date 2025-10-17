"use client";
import { deleteTransaction } from "@/actions/transaction/transaction";
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

export default function DeleteTransactionAlertDialog({
  transactionId,
}: {
  transactionId: string;
}) {
  const [isPending, startTransaction] = useTransition();

  const handleDeleteTransaction = () => {
    startTransaction(async () => {
      const deleteTransactionResponse = await deleteTransaction(transactionId);

      if (deleteTransactionResponse.success) {
        toast.success(
          deleteTransactionResponse.data?.message ||
            "Sua transação foi deletada com sucesso!"
        );
      } else {
        toast.error(
          deleteTransactionResponse?.error ||
            "Ocorreu um erro ao excluir essa transação, tente novamente."
        );
      }
    });
  };
  return (
    <>
      <AlertDialogTitle>
        Você tem certeza que gostaria de excluir essa transação?
      </AlertDialogTitle>
      <AlertDialogDescription>
        Essa ação não poderá sem revertida e irá apagar permanentemente essa
        transação, deseja continuar?
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
