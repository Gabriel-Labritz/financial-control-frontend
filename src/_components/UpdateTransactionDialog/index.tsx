import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import TransactionForm from "../TransactionForm";

export default function UpdateTransactionDialog() {
  return (
    <>
      <DialogHeader>
        <DialogTitle>Editar Transação</DialogTitle>
        <DialogDescription>
          Você pode editar essa transação e alterar o campo que desejar. Clique
          em salvar quando as alterações forem feitas.
        </DialogDescription>
      </DialogHeader>
      <TransactionForm />
    </>
  );
}
