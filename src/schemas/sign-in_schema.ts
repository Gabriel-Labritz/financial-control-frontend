import z from "zod";

export const signInShema = z.object({
  email: z.email("* Email inválido"),
  password: z.string().nonempty("* Informe sua senha."),
});

export type SignInShema = z.infer<typeof signInShema>;
