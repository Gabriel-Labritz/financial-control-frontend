"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// components
import { LoaderCircle, Mail, User } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import PasswordInput from "../password_input/password_input";
import ErrorMessageInput from "../error_message_input/error_message_input";
import { SignUpShema, signUpShema } from "@/schemas/sign_up_schema";

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpShema>({
    resolver: zodResolver(signUpShema),
  });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (formData: SignUpShema) => {
    setIsLoading(true);
    console.log(formData);
    setIsLoading(false);
  };

  return (
    <form method="post" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="nickName" className="text-sm font-sans">
            <User size={18} />
            Apelido*
          </Label>
          <Input
            id="nickName"
            type="text"
            placeholder="ex: Gabriel"
            aria-invalid={!!errors.nickName}
            {...register("nickName")}
            className="py-6 text-sm font-sans"
          />
          {errors.nickName && (
            <ErrorMessageInput message={errors.nickName?.message} />
          )}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email" className="text-sm">
            <Mail size={18} />
            Email*
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="ex: seuemail@email.com"
            aria-invalid={!!errors.email}
            {...register("email")}
            className="py-6 text-sm font-sans"
          />
          {errors.email && (
            <ErrorMessageInput message={errors.email?.message} />
          )}
        </div>
        <div className="grid gap-2">
          <PasswordInput
            {...register("password")}
            aria-invalid={!!errors.password}
          />
          {errors.password && (
            <ErrorMessageInput message={errors.password?.message} />
          )}
        </div>
        {isLoading ? (
          <Button type="submit" className="mt-6 w-full h-14 font-sans">
            <LoaderCircle className="animate-spin" />
            Aguarde...
          </Button>
        ) : (
          <Button type="submit" className="mt-6 w-full h-14">
            Cadastre - se
          </Button>
        )}
      </div>
    </form>
  );
}
