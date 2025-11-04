"use client";

import { getTransactionById } from "@/actions/transaction/transaction";
import { Transaction } from "@/app/(private)/transactions/columns";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import TransactionFormSkeleton from "@/skeleton_components/TransactionFormSkeleton";
import { Pencil } from "lucide-react";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import UpdateTransactionForm from "../UpdateTransactionForm";

export default function UpdateTransactionModalWrapper({ id }: { id: string }) {
  const [transaction, setTransaction] = useState<Transaction | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [isPending, startTransition] = useTransition();

  const fetchAndOpen = (isOpen: boolean) => {
    setOpen(isOpen);

    if (isOpen) {
      setTransaction(null);

      startTransition(async () => {
        const result = await getTransactionById(id);

        if (result.success && result.transaction) {
          setTransaction(result.transaction);
        } else {
          toast.error(
            result.error || "Erro ao carregar os dados da transação."
          );
          setOpen(false);
        }
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={fetchAndOpen}>
      <DialogTrigger className="w-full">
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          <Pencil />
          Editar
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar Transação</DialogTitle>
          <DialogDescription>
            Você pode editar essa transação e alterar o campo que desejar.
            Clique em salvar quando as alterações forem feitas.
          </DialogDescription>
        </DialogHeader>

        {isPending && <TransactionFormSkeleton />}

        {!isPending && transaction && (
          <UpdateTransactionForm
            transactionData={transaction}
            setOpen={setOpen}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
