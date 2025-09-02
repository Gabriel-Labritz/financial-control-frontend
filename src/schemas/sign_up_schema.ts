import z from "zod";

export const signUpShema = z.object({
  nickName: z
    .string()
    .nonempty("*Informe seu apelido.")
    .min(3, "*O apelido deve conter pelo menos 3 caracteres."),
  email: z.email("* Email inválido."),
  password: z
    .string()
    .nonempty("* Informe sua senha.")
    .min(6, "*A senha deve conter pelo menos 6 caracteres.")
    .regex(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&#])/,
      "*A senha deve conter pelo menos 6 caracteres, incluindo ao menos uma letra, um número e um caracter especial (@$!%*?&#)."
    ),
});

export type SignUpShema = z.infer<typeof signUpShema>;
