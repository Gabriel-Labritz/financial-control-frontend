"use client";

import { deleteTransaction } from "@/actions/transaction/transaction";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { LoaderCircle, Trash } from "lucide-react";
import { useState, useTransition } from "react";
import { toast } from "sonner";

export default function DeleteTransactionModalWrapper({ id }: { id: string }) {
  const [isPending, startTransaction] = useTransition();
  const [open, setOpen] = useState<boolean>(false);

  const handleDeleteTransaction = () => {
    startTransaction(async () => {
      const result = await deleteTransaction(id);

      if (result.success) {
        toast.success(
          result.data?.message || "Sua transação foi deletada com sucesso!"
        );
        setOpen(false);
      } else {
        toast.error(
          result?.error ||
            "Ocorreu um erro ao excluir essa transação, tente novamente."
        );
      }
    });
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <DropdownMenuItem
          className="text-destructive"
          onSelect={(e) => {
            e.preventDefault();
          }}
        >
          <Trash color="var(--color-destructive)" />
          Excluir
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>
          Você tem certeza que gostaria de excluir essa transação?
        </DialogTitle>
        <DialogDescription>
          Essa ação não poderá ser revertida e irá apagar permanentemente essa
          transação, deseja continuar?
        </DialogDescription>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Cancelar
            </Button>
          </DialogClose>

          <Button
            type="submit"
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
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
