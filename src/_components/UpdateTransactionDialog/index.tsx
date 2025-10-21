"use client";

import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { getTransactionById } from "@/actions/transaction/transaction";
import { useEffect, useState } from "react";
import { Transaction } from "@/app/(private)/transactions/columns";
import TransactionFormSkeleton from "@/skeleton_components/TransactionFormSkeleton";
import UpdateTransactionForm from "../UpdateTransactionForm";

export default function UpdateTransactionDialog({ id }: { id: string }) {
  const [transaction, setTransaction] = useState<Transaction | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTransactionData = async () => {
      setIsLoading(true);
      setError(null);

      const result = await getTransactionById(id);

      if (result.success && result.transaction) {
        setTransaction(result.transaction);
      } else {
        setError(result.error || "Erro desconhecido ao carregar a transação.");
      }
      setIsLoading(false);
    };

    fetchTransactionData();
  }, [id]);

  return (
    <>
      <DialogHeader>
        <DialogTitle>Editar Transação</DialogTitle>
        <DialogDescription>
          Você pode editar essa transação e alterar o campo que desejar. Clique
          em salvar quando as alterações forem feitas.
        </DialogDescription>
      </DialogHeader>

      {error && (
        <div className="p-3 text-sm text-red-600 text-center">
          Erro: {error}
        </div>
      )}

      {isLoading && <TransactionFormSkeleton />}

      {!isLoading && transaction && (
        <UpdateTransactionForm transactionData={transaction} />
      )}
    </>
  );
}
