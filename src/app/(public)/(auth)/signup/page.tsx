import HeaderTitleAndDescriptionForm from "@/_components/HeaderTitleAndDescriptionForm";
import SignUpForm from "@/_components/SignUpForm";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="w-full md:max-w-xl p-2 xl:p-8">
      {/* HEADER */}
      <div>
        {/* TITLE AND DESCRIPTION */}
        <HeaderTitleAndDescriptionForm
          headerTitle="Bem Vindo!"
          headerDescription="Entre com suas informações abaixo para criar a sua conta."
        />
      </div>

      {/* FORM AREA */}
      <div className="mt-6">
        <SignUpForm />
      </div>

      {/* FOOTER FORM AREA */}
      <div className="mt-4">
        <p className="mt-5 text-center text-sm text-muted-foreground font-normal">
          Já tem uma conta?{" "}
          <Link
            href="/signin"
            className="font-semibold text-primary hover:underline"
          >
            Entrar
          </Link>
        </p>
      </div>
    </div>
  );
}
