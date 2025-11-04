"use client";

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
import { toast } from "sonner";
import { createTransaction } from "@/actions/transaction/transaction";

interface CreateTransactionFormProps {
  setOpen: (open: boolean) => void;
}

export default function CreateTransactionForm({
  setOpen,
}: CreateTransactionFormProps) {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<CreateUpdateTransactionSchema>({
    resolver: zodResolver(createUpdateTransactionSchema),
  });
  const [isPending, startTransaction] = useTransition();

  const categoriesItems = [
    {
      value: "alimentação",
      title: "Alimentação",
      icon: Hamburger,
    },
    {
      value: "transporte",
      title: "Transporte",
      icon: Bus,
    },
    {
      value: "saúde",
      title: "Saúde",
      icon: HeartPulse,
    },
    {
      value: "entreterimento",
      title: "Entreterimento",
      icon: Drama,
    },
    {
      value: "salário",
      title: "Salário",
      icon: DollarSign,
    },
    {
      value: "outro",
      title: "Outro",
      icon: Ellipsis,
    },
  ];

  const onSubmit = async (formData: CreateUpdateTransactionSchema) => {
    startTransaction(async () => {
      const result = await createTransaction(formData);

      if (result.success) {
        toast.success(
          result.data?.message || "A sua transação foi registrada com sucesso!"
        );
        reset();
        setOpen(false);
      } else {
        toast.error(
          result?.error ||
            "Erro ao criar a nova transação transação, tente novamente."
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
              placeholder="ex: Uber Black"
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
              placeholder="ex: 20,90"
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
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="renda">
                        <BanknoteArrowUp />
                        Renda
                      </SelectItem>
                      <SelectItem value="despesa">
                        <BanknoteArrowDown />
                        Despesa
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
                      <SelectValue placeholder="Selecione a categoria" />
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
              placeholder="Adicione uma descrição para essa transação (opcional)."
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
            "Criar Transação"
          )}
        </Button>
      </DialogFooter>
    </form>
  );
}
