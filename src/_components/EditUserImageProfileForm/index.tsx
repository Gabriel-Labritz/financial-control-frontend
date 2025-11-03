"use client";

import { updateUserProfileImage } from "@/actions/user/user";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  ImageProfileSchema,
  imageProfileSchema,
} from "@/schemas/user/image-profile-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function EditUserImageProfileForm() {
  const [preview, setPreview] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ImageProfileSchema>({
    resolver: zodResolver(imageProfileSchema),
  });

  const onSubmit = async (data: ImageProfileSchema) => {
    const formDataToSend = new FormData();
    formDataToSend.append("image", data.image.item(0)!);

    const result = await updateUserProfileImage(formDataToSend);

    if (result.success) {
      toast.success(
        result.data?.message || "Sua foto de perfil foi atualizada com sucesso!"
      );
    } else {
      toast.error(
        result?.error ||
          "Ocorreu um erro ao atualizar sua foto de perfil, tente novamente."
      );
    }
  };

  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {preview && (
          <div className="mt-4 flex justify-center">
            <img
              src={preview}
              alt="preview"
              className="size-48 object-cover rounded-full border border-muted-foreground"
            />
          </div>
        )}
        <FieldSet className="mt-4">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="image">Imagem</FieldLabel>
              <Input
                id="image"
                type="file"
                accept="image/png, image/jpeg, image/jgp"
                aria-invalid={!!errors.image}
                {...register("image")}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) setPreview(URL.createObjectURL(file));
                }}
              />
              {errors.image && (
                <p className="text-[12px] text-destructive">
                  {errors.image.message}
                </p>
              )}
              <Button type="submit">Enviar nova imagem</Button>
            </Field>
          </FieldGroup>
        </FieldSet>
      </form>
    </>
  );
}
