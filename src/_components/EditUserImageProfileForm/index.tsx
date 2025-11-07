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
import { LoaderCircle } from "lucide-react";
import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import ErrorInputMessage from "../ErrorInputMessage";

interface EditUserImageProfileFormProps {
  setOpen: (open: boolean) => void;
}

export default function EditUserImageProfileForm({
  setOpen,
}: EditUserImageProfileFormProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ImageProfileSchema>({
    resolver: zodResolver(imageProfileSchema),
  });
  const [isPending, startTransaction] = useTransition();

  const onSubmit = async (data: ImageProfileSchema) => {
    startTransaction(async () => {
      const formDataToSend = new FormData();
      formDataToSend.append("image", data.image.item(0)!);

      const result = await updateUserProfileImage(formDataToSend);

      if (result.success) {
        toast.success(
          result.data?.message ||
            "Sua foto de perfil foi atualizada com sucesso!"
        );
        setOpen(false);
      } else {
        toast.error(
          result?.error ||
            "Ocorreu um erro ao atualizar sua foto de perfil, tente novamente."
        );
      }
    });
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
              {errors.image && errors.image.message && (
                <ErrorInputMessage errorMessage={errors.image.message} />
              )}
              <Button type="submit" disabled={isPending}>
                {isPending ? (
                  <>
                    <LoaderCircle className="animate-spin" />
                    Aguarde...
                  </>
                ) : (
                  "Enviar imagem"
                )}
              </Button>
            </Field>
          </FieldGroup>
        </FieldSet>
      </form>
    </>
  );
}
