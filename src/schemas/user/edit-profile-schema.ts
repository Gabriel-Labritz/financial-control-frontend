import z from "zod";

export const editProfileSchema = z
  .object({
    name: z
      .string()
      .nonempty("* Informe seu nome.")
      .min(3, "* O nome deve conter no mínimo 3 caracteres.")
      .max(50, "* O nome deve conter no máximo 50 caracteres.")
      .optional(),
    email: z.email("* Informe um email válido."),
    password: z
      .string()
      .nonempty("* Informe sua senha.")
      .min(6, "* A sua senha deve conter no mínimo 6 caracteres.")
      .regex(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&#])/,
        "* A sua senha deve conter pelo menos 6 caracteres, incluindo letras maiúsculas e minúsculas, números e caracteres especiais (@$!%*?&#)."
      )
      .optional()
      .or(z.literal("")),
    confirmPassword: z
      .string()
      .nonempty("* Confirme sua senha")
      .optional()
      .or(z.literal("")),
  })
  .refine(
    (data) => {
      if (!data.password && !data.confirmPassword) {
        return true;
      }

      if (
        (data.password && !data.confirmPassword) ||
        (!data.password && data.confirmPassword)
      ) {
        return false;
      }

      return data.password === data.confirmPassword;
    },
    {
      message: "* As senhas não conferem.",
      path: ["confirmPassword"],
    }
  );

export type EditProfileSchema = z.infer<typeof editProfileSchema>;
