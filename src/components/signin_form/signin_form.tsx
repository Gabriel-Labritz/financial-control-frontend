"use client";
import { Mail } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import PasswordInput from "../password_input/password_input";

export default function SignInForm() {
  return (
    <form method="post">
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email" className="text-sm lg:text-base font-sans">
            <Mail size={18} />
            Email*
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="ex: seuemail@email.com"
            className="py-6 text-sm font-sans"
          />
        </div>
        <div className="grid gap-2">
          <PasswordInput />
        </div>
        <Button type="submit" className="mt-6 w-full h-14 font-sans">
          Entrar
        </Button>
      </div>
    </form>
  );
}
