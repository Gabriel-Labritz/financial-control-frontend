import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BanknoteArrowDown,
  BanknoteArrowUp,
  ChartNoAxesCombined,
  PiggyBank,
  Wallet,
} from "lucide-react";
import formatCurrency from "@/utils/format_currency";
import GraphOverviewCard from "@/components/graph_overview_card/graph_overview_card";
import LastTransactionsCard from "@/components/last_transactions_card/last_transactions_card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import TransactionModal from "@/components/transaction_modal/transaction_modal";
import HeaderBox from "@/components/header_box/header_box";
import BalanceCard from "@/components/balance_card/balance_card";

export default function Dashboard() {
  return (
    <div className="w-full min-w-full p-4">
      <HeaderBox
        type="greeting"
        title="Bem vindo,"
        user="Gabriel"
        subtext="Acesse e gerencie suas finanças com mais efeciência."
      />

      {/* <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 select-none">
          <ChartNoAxesCombined size={25} />
          <h2 className="text-xl sm:text-2xl font-sans tracking-tighter">
            Dashboard
          </h2>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="default" type="button" className="h-12">
              Nova Transação
            </Button>
          </DialogTrigger>
          <DialogContent>
            <TransactionModal />
          </DialogContent>
        </Dialog>
      </div> */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5">
        <BalanceCard />
        {/* <Card>
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
        </Card> */}
        <Card>
          <CardHeader>
            <CardDescription className="flex items-center text-sm font-medium select-none">
              Receitas
              <BanknoteArrowUp
                className="ml-auto size-5"
                color="var(--color-foreground)"
              />
            </CardDescription>
            <CardTitle className="flex-1 text-2xl lg:text-3xl text-chart-2 font-semibold overflow-hidden text-ellipsis whitespace-nowra">
              {formatCurrency(2322)}
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardDescription className="flex items-center text-sm font-medium select-none">
              Gastos
              <BanknoteArrowDown
                className="ml-auto size-5"
                color="var(--color-foreground)"
              />
            </CardDescription>
            <CardTitle className="flex-1 text-2xl lg:text-3xl text-chart-1 font-semibold overflow-hidden text-ellipsis whitespace-nowra">
              {formatCurrency(746.2)}
            </CardTitle>
          </CardHeader>
        </Card>
      </section>
      <section className="flex flex-col md:flex-row gap-4 mt-4">
        <LastTransactionsCard />
        <GraphOverviewCard />
      </section>
    </div>
  );
}
