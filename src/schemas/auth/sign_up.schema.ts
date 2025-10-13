import z from "zod";

export const signUpSchema = z
  .object({
    name: z
      .string()
      .nonempty("* Informe seu nome.")
      .min(3, "* O nome deve conter no mínimo 3 caracteres.")
      .max(50, "* O nome deve conter no máximo 50 caracteres."),
    email: z.email("* Informe um email válido."),
    password: z
      .string()
      .nonempty("* Informe sua senha.")
      .min(6, "* A sua senha deve conter no mínimo 6 caracteres.")
      .regex(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&#])/,
        "* A sua senha deve conter pelo menos 6 caracteres, incluindo letras maiúsculas e minúsculas, números e caracteres especiais (@$!%*?&#)."
      ),
    confirmPassword: z.string().nonempty("* Confirme sua senha"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "* As senhas não conferem.",
    path: ["confirmPassword"],
  });

export type SignUpShema = z.infer<typeof signUpSchema>;
