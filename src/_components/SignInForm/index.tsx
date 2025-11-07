"use client";

import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { BadgeCheck, BadgeX, LoaderCircle, Lock, Mail } from "lucide-react";
import PasswordInput from "../PasswordInput/PasswordInput";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import ErrorInputMessage from "../ErrorInputMessage";
import { signInSchema, SignInSchema } from "@/schemas/auth/sign_in.schema";
import { signin } from "@/actions/auth/sign_in";
import { redirect } from "next/navigation";

export default function SignInForm() {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInSchema>({ resolver: zodResolver(signInSchema) });
  const [apiError, setApiError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const onSubmit = async (formData: SignInSchema) => {
    startTransition(async () => {
      setSuccessMessage(null);
      setApiError(null);

      const signInResponse = await signin(formData);

      if (signInResponse.success) {
        setSuccessMessage(
          signInResponse.data?.message || "Login bem sucedido!"
        );
        setApiError(null);
        reset();

        setTimeout(() => {
          redirect("/");
        }, 1500);
      } else {
        setSuccessMessage(null);
        setApiError(
          signInResponse.error || "Ocorreu um erro ao entrar na sua conta."
        );
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full">
        {/* FEEDBACK AREA */}
        <div className="mb-6">
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

            {/* BUTTON FORM */}
            <Field className="mt-4">
              <Button type="submit" disabled={isPending} className="h-14">
                {isPending ? (
                  <>
                    <LoaderCircle className="animate-spin" />
                    Aguarde...
                  </>
                ) : (
                  "Entrar"
                )}
              </Button>
            </Field>
          </FieldGroup>
        </FieldSet>
      </div>
    </form>
  );
}
