"use client";

import { Transaction } from "@/app/(private)/transactions/columns";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  createUpdateTransactionSchema,
  CreateUpdateTransactionSchema,
} from "@/schemas/transaction/create-updated-transaction.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { DialogClose, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ErrorInputMessage from "../ErrorInputMessage";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BanknoteArrowDown,
  BanknoteArrowUp,
  Bus,
  DollarSign,
  Drama,
  Ellipsis,
  Hamburger,
  HeartPulse,
  LoaderCircle,
} from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useTransition } from "react";
import { updateTransaction } from "@/actions/transaction/transaction";
import { toast } from "sonner";

interface TransactionFormProps {
  transactionData?: Transaction;
}

export default function UpdateTransactionForm({
  transactionData,
}: TransactionFormProps) {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<CreateUpdateTransactionSchema>({
    resolver: zodResolver(createUpdateTransactionSchema),
    defaultValues: {
      title: transactionData?.title,
      amount: Number(transactionData?.amount),
      type: transactionData?.type,
      category: transactionData?.category,
      description: transactionData?.description,
    },
  });
  const [isPending, startTransaction] = useTransition();

  const categoriesItems = [
    {
      value: "food",
      title: "Alimentação",
      icon: Hamburger,
    },
    {
      value: "transport",
      title: "Transporte",
      icon: Bus,
    },
    {
      value: "health",
      title: "Saúde",
      icon: HeartPulse,
    },
    {
      value: "entertainment",
      title: "Entreterimento",
      icon: Drama,
    },
    {
      value: "salary",
      title: "Salário",
      icon: DollarSign,
    },
    {
      value: "other",
      title: "Outro",
      icon: Ellipsis,
    },
  ];

  const onSubmit = async (formData: CreateUpdateTransactionSchema) => {
    startTransaction(async () => {
      if (!transactionData?.id) return;

      const result = await updateTransaction(transactionData?.id, formData);

      if (result.success) {
        toast.success(
          result.data?.message || "A sua transação foi atualizada com sucesso!"
        );
        reset();
      } else {
        toast.error(
          result?.error || "Erro ao atualizar a transação, tente novamente."
        );
      }
    });
  };

  return (
    <form method="POST" onSubmit={handleSubmit(onSubmit)}>
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="title">Título</FieldLabel>
            <Input
              id="title"
              type="text"
              aria-invalid={!!errors.title}
              {...register("title")}
            />
            {errors.title && errors.title.message && (
              <ErrorInputMessage errorMessage={errors.title.message} />
            )}
          </Field>
          <Field>
            <FieldLabel htmlFor="amount">Valor</FieldLabel>
            <Input
              id="amount"
              type="number"
              step="0.01"
              aria-invalid={!!errors.amount}
              {...register("amount", { valueAsNumber: true })}
            />
            {errors.amount && errors.amount.message && (
              <ErrorInputMessage errorMessage={errors.amount.message} />
            )}
          </Field>
          {/* SELECTS */}
          <div className="grid grid-cols-2 gap-2">
            <Field>
              <FieldLabel htmlFor="type">Tipo</FieldLabel>
              <Controller
                name="type"
                control={control}
                render={({ field }) => (
                  <Select
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <SelectTrigger id="type" aria-invalid={!!errors.type}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="income">
                        <BanknoteArrowUp />
                        Entrada
                      </SelectItem>
                      <SelectItem value="expense">
                        <BanknoteArrowDown />
                        Saída
                      </SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.type && errors.type.message && (
                <ErrorInputMessage errorMessage={errors.type.message} />
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor="category">Categoria</FieldLabel>
              <Controller
                name="category"
                control={control}
                render={({ field }) => (
                  <Select
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <SelectTrigger
                      id="category"
                      aria-invalid={!!errors.category}
                    >
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categoriesItems.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          <item.icon />
                          {item.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.type && errors.type.message && (
                <ErrorInputMessage errorMessage={errors.type.message} />
              )}
            </Field>
          </div>
          <Field>
            <FieldLabel htmlFor="description">Descrição</FieldLabel>
            <Textarea
              id="description"
              maxLength={255}
              aria-invalid={!!errors.description}
              {...register("description")}
            />
          </Field>
        </FieldGroup>
      </FieldSet>

      <DialogFooter className="mt-4">
        <DialogClose asChild>
          <Button type="button" variant="outline">
            Voltar
          </Button>
        </DialogClose>
        <Button type="submit" disabled={isPending}>
          {isPending ? (
            <>
              <LoaderCircle className="animate-spin" />
              Aguarde...
            </>
          ) : (
            "Confirmar"
          )}
        </Button>
      </DialogFooter>
    </form>
  );
}
