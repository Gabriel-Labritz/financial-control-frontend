"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeClosed } from "lucide-react";
import { forwardRef, InputHTMLAttributes, useState } from "react";

export type PasswordInputProps = InputHTMLAttributes<HTMLInputElement> & {
  placeholderText: string;
  inputId: string;
};

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ placeholderText, inputId, ...props }, ref) => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const handleVisibilityPassword = () =>
      setPasswordVisible(() => !passwordVisible);

    return (
      <div className="relative">
        <Input
          id={inputId}
          type={passwordVisible ? "text" : "password"}
          placeholder={placeholderText}
          {...props}
          ref={ref}
          className="pr-12 text-sm"
        />
        <Button
          type="button"
          variant="ghost"
          onClick={handleVisibilityPassword}
          className="absolute right-1 top-1/2 -translate-y-1/2"
        >
          {passwordVisible ? (
            <>
              <EyeClosed />
              <span className="sr-only">Ocultar senha</span>
            </>
          ) : (
            <>
              <Eye />
              <span className="sr-only">Vizualizar senha</span>
            </>
          )}
        </Button>
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";
export default PasswordInput;
