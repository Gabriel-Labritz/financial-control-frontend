"use client";

import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  BadgeCheck,
  BadgeX,
  LoaderCircle,
  Lock,
  Mail,
  User,
} from "lucide-react";
import PasswordInput from "../PasswordInput/PasswordInput";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { signUpSchema, SignUpSchema } from "@/schemas/auth/sign_up.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { signup } from "@/actions/auth/sign_up";
import { useState, useTransition } from "react";
import { redirect } from "next/navigation";
import ErrorInputMessage from "../ErrorInputMessage";

export default function SignUpForm() {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<SignUpSchema>({ resolver: zodResolver(signUpSchema) });
  const [apiError, setApiError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const onSubmit = async (formData: SignUpSchema) => {
    startTransition(async () => {
      setSuccessMessage(null);
      setApiError(null);

      const signupResponse = await signup(formData);

      if (signupResponse.success) {
        setSuccessMessage(
          signupResponse.data?.message || "Sua conta foi criada com sucesso!"
        );
        setApiError(null);
        reset();

        setTimeout(() => {
          redirect("/signin");
        }, 1500);
      } else {
        setSuccessMessage(null);
        setApiError(
          signupResponse?.error || "Ocorreu um erro ao criar a sua conta."
        );
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full">
        {/* FEEDBACK AREA */}
        <div>
          {successMessage && (
            <div className="flex items-center justify-center gap-2 text-primary text-sm font-medium select-none">
              <BadgeCheck />
              <p>{successMessage}</p>
            </div>
          )}
          {apiError && (
            <div className="flex items-center justify-center gap-2 text-destructive text-sm font-medium select-none">
              <BadgeX />
              <p>{apiError}</p>
            </div>
          )}
        </div>

        <FieldSet>
          <FieldGroup>
            {/* FORM FIELDS */}
            <Field>
              <FieldLabel
                htmlFor="name"
                className="flex items-center gap-2 font-normal"
              >
                <User className="size-5" />
                Nome
              </FieldLabel>
              <Input
                id="name"
                type="text"
                placeholder="Seu nome"
                {...register("name")}
                aria-invalid={!!errors.name}
                className="text-sm"
              />
              {errors.name && errors.name.message && (
                <ErrorInputMessage errorMessage={errors.name.message} />
              )}
            </Field>
            <Field>
              <FieldLabel
                htmlFor="email"
                className="flex items-center gap-2 font-normal"
              >
                <Mail className="size-5" />
                E-mail
              </FieldLabel>
              <Input
                id="email"
                type="text"
                placeholder="Seu e-mail"
                {...register("email")}
                aria-invalid={!!errors.email}
                className="text-sm"
              />
              {errors.email && errors.email.message && (
                <ErrorInputMessage errorMessage={errors.email.message} />
              )}
            </Field>
            <Field>
              <FieldLabel
                htmlFor="password"
                className="flex items-center gap-2 font-normal"
              >
                <Lock className="size-5" />
                Senha
              </FieldLabel>
              <PasswordInput
                inputId="password"
                placeholderText="Digite sua senha..."
                {...register("password")}
                aria-invalid={!!errors.password}
              />
              {errors.password && errors.password.message && (
                <ErrorInputMessage errorMessage={errors.password.message} />
              )}
            </Field>
            <Field>
              <FieldLabel
                htmlFor="confirmPassword"
                className="flex items-center gap-2 font-normal"
              >
                <Lock className="size-5" />
                Confirmar Senha
              </FieldLabel>
              <PasswordInput
                inputId="confirmPassword"
                placeholderText="Confirme sua senha..."
                {...register("confirmPassword")}
                aria-invalid={!!errors.confirmPassword}
              />
              {errors.confirmPassword && errors.confirmPassword.message && (
                <ErrorInputMessage
                  errorMessage={errors.confirmPassword.message}
                />
              )}
            </Field>

            {/* BUTTON FORM */}
            <Field className="mt-4">
              <Button type="submit" disabled={isPending} className="h-14">
                {isPending ? (
                  <>
                    <LoaderCircle className="animate-spin" />
                    Aguarde...
                  </>
                ) : (
                  "Criar conta"
                )}
              </Button>
            </Field>
          </FieldGroup>
        </FieldSet>
      </div>
    </form>
  );
}
