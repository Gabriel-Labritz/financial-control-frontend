import TransactionForm from "../transaction_form/transaction_form";
import { DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";

export default function TransactionModal() {
  return (
    <>
      <DialogHeader className="select-none">
        <DialogTitle className="text-lg sm:text-xl font-sans font-medium tracking-tighter">
          Adicione uma nova transação
        </DialogTitle>
        <DialogDescription className="font-sans">
          preencha as informações abaixo para adicionar uma nova transação ao
          seu controle financeiro.
        </DialogDescription>
      </DialogHeader>
      <TransactionForm />
    </>
  );
}
