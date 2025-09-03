import { Card, CardContent } from "../ui/card";
import CounterAnimated from "../counter_animated/counter_animeated";
import { DoughnutChart } from "../doughnut_chart/doughnut_chart";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import TransactionModal from "../transaction_modal/transaction_modal";

export default function BalanceCard() {
  return (
    <Card>
      <CardContent className="flex items-center">
        <div className="size-full max-w-[100px] sm:max-w-[120px]">
          <DoughnutChart />
        </div>
        <div className="flex flex-col items-center gap-6">
          <div>
            <p className="text-sm font-medium text-muted-foreground select-none">
              Balanço total
            </p>
            <p className="flex-1 text-2xl lg:text-3xl font-semibold text-foreground">
              <CounterAnimated amount={1200.87} />
            </p>
          </div>
        </div>
        <div className="ml-auto">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost">
                <Plus />
                Transação
              </Button>
            </DialogTrigger>
            <DialogContent>
              <TransactionModal />
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
}
