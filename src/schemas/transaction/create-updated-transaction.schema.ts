import z from "zod";

export const createUpdateTransactionSchema = z.object({
  title: z
    .string()
    .nonempty("* Informe o título da transação.")
    .min(3, "* O título deve conter no mínimo 3 caracteres.")
    .max(50, "* O título deve conter no máximo 50 caracteres."),
  amount: z
    .number("* Informe o valor da transação.")
    .gt(0, "* O valor da transação deve ser maior que R$ 0,00")
    .positive("* O valor da transação deve ser positivo"),
  type: z.enum(["income", "expense"], "* Selecione o tipo da transação."),
  category: z.enum(
    ["food", "transport", "health", "entertainment", "salary", "other"],
    "* Selecione a categoria da transação."
  ),
  description: z
    .string()
    .max(
      255,
      "* A descrição da transação deve conter no máximo 255 caracteres."
    )
    .optional(),
});

export type CreateUpdateTransactionSchema = z.infer<
  typeof createUpdateTransactionSchema
>;
