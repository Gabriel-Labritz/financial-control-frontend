"use client";

import DeleteTransactionAlertDialog from "@/_components/DeleteTransactionAlertDialog";
import UpdateTransactionDialog from "@/_components/UpdateTransactionDialog";
import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";
import { DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlertDialogTrigger } from "@radix-ui/react-alert-dialog";
import { Dialog } from "@radix-ui/react-dialog";
import { ColumnDef } from "@tanstack/react-table";
import {
  ArrowUpDown,
  MoreHorizontal,
  Pencil,
  Trash,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

export type Transaction = {
  id: string;
  title: string;
  amount: string;
  type: "despesa" | "renda";
  category:
    | "entreterimento"
    | "saúde"
    | "transporte"
    | "alimentação"
    | "salário"
    | "outro";
  description: string;
  createdAt: string;
};

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "title",
    header: () => {
      return (
        <div className="text-muted-foreground uppercase text-[12px]">
          Transação
        </div>
      );
    },
  },
  {
    accessorKey: "amount",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-muted-foreground uppercase text-[12px]"
        >
          Valor
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const type = row.original.type;

      const formatCurrency = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(amount);

      return (
        <div>
          {type === "despesa" ? (
            <p className="flex items-center gap-2 text-destructive">
              <TrendingDown className="size-5" />-{formatCurrency}
            </p>
          ) : (
            <p className="flex items-center gap-2 text-primary">
              <TrendingUp className="size-5" />+{formatCurrency}
            </p>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "type",
    header: () => {
      return (
        <div className="text-muted-foreground uppercase text-[12px]">Tipo</div>
      );
    },
  },
  {
    accessorKey: "category",
    header: () => {
      return (
        <div className="text-muted-foreground uppercase text-[12px]">
          Categoria
        </div>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-muted-foreground uppercase text-[12px]"
        >
          Data
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue("createdAt"));
      const formatedDate = new Intl.DateTimeFormat("pt-BR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(date);

      return <div className="text-muted-foreground">{formatedDate}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const transaction = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Abrir opções de ações</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Dialog>
              <DialogTrigger className="w-full">
                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                  <Pencil />
                  Editar
                </DropdownMenuItem>
              </DialogTrigger>
              <DialogContent>
                <UpdateTransactionDialog id={transaction.id} />
              </DialogContent>
            </Dialog>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <DropdownMenuItem
                  className="text-destructive"
                  onSelect={(e) => {
                    e.preventDefault();
                  }}
                >
                  <Trash color="var(--color-destructive)" />
                  Excluir
                </DropdownMenuItem>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <DeleteTransactionAlertDialog transactionId={transaction.id} />
              </AlertDialogContent>
            </AlertDialog>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
