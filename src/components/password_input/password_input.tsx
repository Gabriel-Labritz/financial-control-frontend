"use client";
import { Eye, EyeClosed, Lock } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { forwardRef, InputHTMLAttributes, useState } from "react";

export type PasswordInputProps = InputHTMLAttributes<HTMLInputElement>;

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ ...props }, ref) => {
    const [isVisible, setIsVisible] = useState(false);
    const handleVisiblePassword = () => setIsVisible(() => !isVisible);

    return (
      <div className="relative">
        <Label
          htmlFor="password"
          className="text-sm lg:text-base font-sans mb-2"
        >
          <Lock size={18} />
          Senha*
        </Label>
        <Input
          id="password"
          ref={ref}
          type={isVisible ? "text" : "password"}
          placeholder="Informe sua senha..."
          className="py-6 pr-10 text-sm font-sans "
          {...props}
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={handleVisiblePassword}
          className="absolute right-1 top-1/2"
        >
          {isVisible ? <EyeClosed /> : <Eye />}
          <p className="sr-only">Visualizar senha</p>
        </Button>
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";
export default PasswordInput;
