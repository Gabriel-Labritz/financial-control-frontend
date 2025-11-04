"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import CreateTransactionForm from "../CreateTransactionForm";

export default function CreateTransactionModalWrapper() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button type="button" className="h-12">
          Nova Transação
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Nova transação</DialogTitle>
          <DialogDescription>
            Entre com as informações abaixo para criar novas transações.
          </DialogDescription>
        </DialogHeader>
        <CreateTransactionForm setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
}
