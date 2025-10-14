import HeaderTitleAndDescriptionForm from "@/_components/HeaderTitleAndDescriptionForm";
import SignInForm from "@/_components/SignInForm";
import Link from "next/link";

export default function SignIn() {
  return (
    <div className="w-full md:max-w-xl p-2 xl:p-8">
      {/* HEADER */}
      <div>
        {/* TITLE AND DESCRIPTION */}
        <HeaderTitleAndDescriptionForm
          headerTitle="Bem vindo de volta!"
          headerDescription="Entre com suas informações abaixo para acessar sua conta."
        />
      </div>

      {/* FORM AREA */}
      <div className="mt-6">
        <SignInForm />
      </div>

      {/* FOOTER FORM AREA */}
      <div className="mt-4">
        <p className="mt-5 text-center text-sm text-muted-foreground font-normal">
          Não tem uma conta?{" "}
          <Link
            href="/signup"
            className="font-semibold text-primary hover:underline"
          >
            Criar conta
          </Link>
        </p>
      </div>
    </div>
  );
}
