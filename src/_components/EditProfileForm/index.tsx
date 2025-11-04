"use client";

import { Button } from "@/components/ui/button";
import { DialogClose, DialogFooter } from "@/components/ui/dialog";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import PasswordInput from "../PasswordInput/PasswordInput";
import { User } from "@/actions/types/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import ErrorInputMessage from "../ErrorInputMessage";
import {
  EditProfileSchema,
  editProfileSchema,
} from "@/schemas/user/edit-profile-schema";
import { updateUserProfile } from "@/actions/user/user";
import { toast } from "sonner";
import { LoaderCircle } from "lucide-react";

interface EditProfileFormProps {
  userData: User;
}

export default function EditProfileForm({ userData }: EditProfileFormProps) {
  const {
    register,
    formState: { errors, isDirty },
    handleSubmit,
  } = useForm<EditProfileSchema>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      name: userData.name || "",
      email: userData.email || "",
      password: "",
      confirmPassword: "",
    },
  });
  const [isPending, startTransition] = useTransition();

  const onSubmit = async (formData: EditProfileSchema) => {
    startTransition(async () => {
      const result = await updateUserProfile(formData);

      if (result.success) {
        toast.success(
          result.data?.message ||
            "Suas informações foram atualizadas com sucesso!"
        );
      } else {
        toast.error(
          result?.error ||
            "Erro ao atualizar as informações do perfil, tente novamente."
        );
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="name">Nome</FieldLabel>
            <Input
              id="name"
              type="text"
              aria-invalid={!!errors.name}
              placeholder="Informe seu nome..."
              {...register("name")}
            />
            {errors.name && errors.name.message && (
              <ErrorInputMessage errorMessage={errors.name.message} />
            )}
          </Field>

          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              type="email"
              aria-invalid={!!errors.email}
              disabled
              {...register("email")}
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="password">Nova senha</FieldLabel>
            <PasswordInput
              inputId="password"
              placeholderText="Informe sua nova senha"
              aria-invalid={!!errors.password}
              {...register("password")}
            />
            {errors.password && errors.password.message && (
              <ErrorInputMessage errorMessage={errors.password.message} />
            )}
          </Field>

          <Field>
            <FieldLabel htmlFor="confirmPassword">Confirmar senha</FieldLabel>
            <PasswordInput
              inputId="confirmPassword"
              placeholderText="Confirme sua nova senha"
              aria-invalid={!!errors.confirmPassword}
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && errors.confirmPassword.message && (
              <ErrorInputMessage
                errorMessage={errors.confirmPassword.message}
              />
            )}
          </Field>
        </FieldGroup>
      </FieldSet>

      <DialogFooter className="mt-4">
        <DialogClose asChild>
          <Button type="button" variant="outline">
            Voltar
          </Button>
        </DialogClose>
        <Button type="submit" disabled={isPending || !isDirty}>
          {isPending ? (
            <>
              <LoaderCircle className="animate-spin" />
              Aguarde...
            </>
          ) : (
            "Editar"
          )}
        </Button>
      </DialogFooter>
    </form>
  );
}
