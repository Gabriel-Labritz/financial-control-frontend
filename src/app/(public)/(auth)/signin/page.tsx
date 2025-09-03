import LogoSite from "@/components/logo_site/logo_site";
import SignInForm from "@/components/signin_form/signin_form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, DoorOpen } from "lucide-react";
import Link from "next/link";

export default function SignIn() {
  return (
    <Card className="w-full max-w-sm md:max-w-lg py-8 shadow-none border-none">
      <CardHeader className="select-none">
        <Button variant="ghost" size="icon">
          <Link href="#">
            <ArrowLeft />
            <span className="sr-only">Voltar</span>
          </Link>
        </Button>
        <LogoSite />
        <CardTitle className="mt-5 text-2xl font-sans font-medium tracking-tighter">
          Entrar na sua conta
        </CardTitle>
        <CardDescription className="font-sans text-sm leading-4">
          Por favor entre com suas informações abaixo para acessar a sua conta.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignInForm />
        <div className="mt-10">
          <Separator />
        </div>
        <div className="flex justify-center mt-4">
          <p className="text-sm text-muted-foreground font-sans">
            Não possui uma conta ?
            <Link
              href="/signup"
              className="flex justify-center items-center gap-2"
            >
              <span className="text-primary font-semibold tracking-tighter hover:underline">
                Cadastre - se
              </span>
              <DoorOpen size={18} color="var(--color-primary)" />
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
