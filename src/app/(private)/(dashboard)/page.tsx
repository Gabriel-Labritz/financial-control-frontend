import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BanknoteArrowDown,
  BanknoteArrowUp,
  PiggyBank,
  Wallet,
} from "lucide-react";
import formatCurrency from "@/utils/format_currency";
import GraphOverviewCard from "@/components/graph_overview_card/graph_overview_card";
import LastTransactionsCard from "@/components/last_transactions_card/last_transactions_card";

export default function Dashboard() {
  return (
    <div className="w-full min-w-full p-4">
      <div className="">Button area</div>
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        <Card>
          <CardHeader>
            <CardDescription className="flex items-center text-sm sm:text-base font-sans">
              Total
              <Wallet
                className="ml-auto size-5 sm:size-6"
                color="var(--color-foreground)"
              />
            </CardDescription>
            <CardTitle className="text-xl sm:text-2xl xl:text-4xl font-sans font-semibold tracking-tighter overflow-hidden text-ellipsis whitespace-nowra">
              {formatCurrency(1575)}
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardDescription className="flex items-center text-sm sm:text-base font-sans">
              Receitas
              <BanknoteArrowUp
                className="ml-auto size-5 sm:size-6"
                color="var(--color-foreground)"
              />
            </CardDescription>
            <CardTitle className="text-xl sm:text-2xl xl:text-4xl text-chart-2 font-sans font-semibold tracking-tighter overflow-hidden text-ellipsis whitespace-nowra">
              {formatCurrency(2322)}
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardDescription className="flex items-center text-sm sm:text-base font-sans">
              Gastos
              <BanknoteArrowDown
                className="ml-auto size-5 sm:size-6"
                color="var(--color-foreground)"
              />
            </CardDescription>
            <CardTitle className="text-xl sm:text-2xl xl:text-4xl text-chart-1 font-sans font-semibold tracking-tighter overflow-hidden text-ellipsis whitespace-nowra">
              {formatCurrency(746)}
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardDescription className="flex items-center text-sm sm:text-base font-sans">
              Nº Transações
              <PiggyBank
                className="ml-auto size-5 sm:size-6"
                color="var(--color-foreground)"
              />
            </CardDescription>
            <CardTitle className="text-xl sm:text-2xl xl:text-4xl font-sans font-semibold tracking-tighter overflow-hidden text-ellipsis whitespace-nowra">
              8
            </CardTitle>
          </CardHeader>
        </Card>
      </section>
      <section className="flex flex-col md:flex-row gap-4 mt-4">
        <GraphOverviewCard />
        <LastTransactionsCard />
      </section>
    </div>
  );
}
