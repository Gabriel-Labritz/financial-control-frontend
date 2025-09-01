import * as z from "zod";

export const transactioSchema = z.object({
  title: z
    .string("* O Título da transação é obrigatório.")
    .min(3, "* Título deve conter pelo menos 3 caracteres."),
  amount: z
    .number("* O valor da transação é obrigatório.")
    .gt(0, "* O valor informado deve ser maior que R$0,00.")
    .positive("* O valor informado deve ser positivo."),
  type: z.enum(["income", "expense"], "* Selecione o tipo da transação."),
  category: z.enum(
    ["food", "transport", "health", "entertainment", "salary", "other"],
    "* Selecione a categoria da transação."
  ),
  description: z.string().max(255).optional(),
});

export type TransactionSchema = z.infer<typeof transactioSchema>;
