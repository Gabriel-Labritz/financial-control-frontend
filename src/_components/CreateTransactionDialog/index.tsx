import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import CreateTransactionForm from "../CreateTransactionForm";

export default function CreateTransactionModal() {
  return (
    <>
      <DialogHeader>
        <DialogTitle>Nova transação</DialogTitle>
        <DialogDescription>
          Entre com as informações abaixo para criar novas transações.
        </DialogDescription>
      </DialogHeader>
      <CreateTransactionForm />
    </>
  );
}
