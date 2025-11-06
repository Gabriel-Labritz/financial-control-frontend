import { Button } from "@/components/ui/button";
import { ChartArea, ChartSpline, Gauge, Landmark } from "lucide-react";
import Link from "next/link";
import { Marquee } from "@/components/ui/marquee";
import TechLogoCard from "@/_components/TechLogoCard";
import AppFooter from "@/_components/Footer";
export default function LandingPage() {
  const technologies = [
    {
      name: "NextJS",
      img: "https://res.cloudinary.com/dcpposuvr/image/upload/v1762440293/Next.js_axhfl2.png",
    },
    {
      name: "TypeScript",
      img: "https://res.cloudinary.com/dcpposuvr/image/upload/v1762440293/TypeScript_pa9bmh.png",
    },
    {
      name: "Tailwind CSS",
      img: "https://res.cloudinary.com/dcpposuvr/image/upload/v1762440294/Tailwind_CSS_l9zmbx.png",
    },
    {
      name: "Shadcn",
      img: "https://res.cloudinary.com/dcpposuvr/image/upload/v1762440293/shadcn_j69cnl.png",
    },
    {
      name: "NestJs",
      img: "https://res.cloudinary.com/dcpposuvr/image/upload/v1762440293/Nest.js_ep8loi.png",
    },
    {
      name: "PostgresSQL",
      img: "https://res.cloudinary.com/dcpposuvr/image/upload/v1762440294/PostgresSQL_pc3kpt.png",
    },
    {
      name: "JWT",
      img: "https://res.cloudinary.com/dcpposuvr/image/upload/v1762440294/jwt_dxim49.png",
    },
  ];

  return (
    <main className="w-full">
      <div className="w-full xl:w-4/5 mx-auto px-4 md:px-8">
        {/* HEADER */}
        <header className="flex justify-between items-center py-6">
          <div className="flex items-center select-none">
            <ChartArea className="size-8 text-primary" />
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-foreground">
              FinanCash
            </h2>
          </div>

          <Button type="button" asChild className="dark:text-foreground">
            <Link href="/signin">Entrar</Link>
          </Button>
        </header>

        {/* HERO SECTION */}
        <section className="grid justify-items-center gap-6 px-4 mt-16">
          <h1 className="w-full max-w-4xl text-4xl xl:text-5xl font-bold tracking-tighter leading-9 xl:leading-12 text-center text-gray-900 dark:text-foreground animate-fade-down animate-once animate-duration-[650ms] animate-delay-[650ms] animate-ease-out animate-normal">
            Controle suas finanças sem esforço: Sua Vida organizada em segundos.
          </h1>
          <p className="text-[18px] text-muted-foreground text-center max-w-3xl tracking-tight animate-fade-down animate-once animate-duration-[650ms] animate-delay-[650ms] animate-ease-out animate-normal">
            Uma aplicação moderna construída para te ajudar a organizar e
            gerenciar seus gastos e rendas de forma prática.
          </p>

          <Link href="/signup">
            <Button className="w-60 h-12 rounded-xl mt-4 dark:text-foreground animate-fade animate-once animate-duration-[650ms] animate-delay-[650ms] animate-ease-out animate-normal">
              Começar
            </Button>
          </Link>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8
          "
          >
            <div className="h-[400px] overflow-hidden rounded-xl shadow-xl bg-amber-100 animate-fade-up animate-once animate-duration-1000 animate-delay-1000 animate-ease-out animate-normal">
              <img
                src="https://res.cloudinary.com/dcpposuvr/image/upload/v1762354961/application-phone_gbgxce.png"
                alt="application image phone"
                className="object-cover"
              />
            </div>
            <div className="flex justify-center items-center h-[400px] overflow-hidden rounded-xl bg-primary shadow-xl animate-fade-up animate-once animate-duration-1000 animate-delay-1000 animate-ease-out animate-normal">
              <img
                src="https://res.cloudinary.com/dcpposuvr/image/upload/v1762355964/graph_fkthpn.png"
                alt="application image phone"
                className="w-[250px] object-cover rounded-xl"
              />
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="grid justify-items-center gap-4 bg-muted py-16 px-4 mt-16">
          <h2 className="w-full max-w-4xl text-3xl xl:text-4xl font-bold tracking-tighter leading-9 xl:leading-12 text-center text-gray-900 dark:text-foreground">
            Conheça as funcionalidades que vão facilitar seu controle
            financeiro.
          </h2>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12
          "
          >
            <div className="grid gap-4 w-full md:w-sm p-6 border-2 rounded-lg">
              <div className="flex justify-center items-center size-12 bg-primary rounded-lg mr-auto">
                <Gauge color="var(--color-muted)" />
              </div>
              <p className="text-[20px] font-semibold tracking-tighter">
                Dashboard em Tempo Real
              </p>
              <span className="text-[14px] text-muted-foreground tracking-tight">
                Visualize saldos e gráficos atualizados instantaneamente,
                garantindo feedback imediato em cada transação.
              </span>
            </div>

            <div className="grid gap-4 w-full md:w-sm p-6 border-2 rounded-lg">
              <div className="flex justify-center items-center size-12 bg-primary rounded-lg mr-auto">
                <Landmark color="var(--color-muted)" />
              </div>
              <p className="text-[20px] font-semibold tracking-tighter">
                Controle completo
              </p>
              <span className="text-[14px] text-muted-foreground tracking-tight">
                Registre e categorize suas transações em tempo real. Separe
                entradas (Renda) de saídas (Despesa) facilmente com a capacidade
                de edição e exclusão de qualquer transação a qualquer momento.
              </span>
            </div>

            <div className="grid gap-4 w-full md:w-sm p-6 border-2 rounded-lg">
              <div className="flex justify-center items-center size-12 bg-primary rounded-lg mr-auto">
                <ChartSpline color="var(--color-muted)" />
              </div>
              <p className="text-[20px] font-semibold tracking-tighter">
                Gráficos Visuais
              </p>
              <span className="text-[14px] text-muted-foreground tracking-tight">
                Visualize suas finanças com gráficos automáticos. Entenda seus
                hábitos com relatórios de despesas por categoria e acompanhe a
                saúde financeira com o overview mensal.
              </span>
            </div>
          </div>
        </section>

        {/* STACK SECTION */}
        <section className="grid justify-items-center gap-4 px-4 mt-12">
          <h2 className="max-w-3xl text-3xl xl:text-4xl font-bold tracking-tighter leading-9 xl:leading-10 text-center text-black dark:text-foreground">
            Ferramentas Utilizadas.
          </h2>
          <p className="text-[18px] text-muted-foreground text-center tracking-tight">
            A aplicação utiliza das ferramentas mais recentes e eficientes para
            a criação de aplicações Full-Stack modernas.
          </p>

          <div className="w-full mt-12 overflow-hidden">
            <Marquee pauseOnHover className="[--duration:30s]">
              {technologies.map((tech) => (
                <TechLogoCard
                  key={tech.name}
                  techName={tech.name}
                  img={tech.img}
                />
              ))}
            </Marquee>
          </div>
        </section>

        {/* FOOTER */}
        <AppFooter />
      </div>
    </main>
  );
}
