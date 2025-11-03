import z from "zod";

const MAX_UPLOAD_SIZE = 1024 * 1024 * 5;
const ACCEPTED_IMG_MIME_TYPES = ["image/jpeg", "image/png", "image/jpg"];

export const imageProfileSchema = z.object({
  image: z
    .instanceof(FileList)
    .refine((list) => list.length > 0, "Selecione a imagem.")
    .refine(
      (list) => list[0]?.size <= MAX_UPLOAD_SIZE,
      "O Tamanho máximo da imagem é de até 5MB."
    )
    .refine(
      (list) => ACCEPTED_IMG_MIME_TYPES.includes(list[0]?.type),
      "Somente imagens jpeg, png e jpg são suportadas."
    ),
});

export type ImageProfileSchema = z.infer<typeof imageProfileSchema>;
