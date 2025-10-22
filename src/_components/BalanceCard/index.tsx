import { Card, CardContent } from "@/components/ui/card";
import PieChartDonut, { PieChartData } from "../PieChartDonut";
import { getSummaryBalance } from "@/actions/dashboard/dashboard";
import CounterAnimated from "../CounterAnimated";
import CardError from "../CardError";

export default async function BalanceCard() {
  const result = await getSummaryBalance();

  if (!result.success && result.error) {
    return <CardError error={result.error} />;
  }

  if (!result.data) return;

  const chartData = [
    {
      type: "expense",
      amount: result.data.totalExpenses,
      fill: "var(--color-chart-2)",
    },
    {
      type: "income",
      amount: result.data.totalIncomes,
      fill: "var(--color-chart-1)",
    },
  ] as PieChartData[];

  return (
    <Card className="border-none w-full max-w-[600px]">
      <CardContent className="flex items-center gap-4">
        <div className="w-32 h-32 shrink-0">
          <PieChartDonut data={chartData} />
        </div>
        <div className="flex flex-col items-center gap-6">
          <div>
            <p className="text-sm font-medium text-muted-foreground select-none">
              Balanço Total
            </p>
            <p className="flex-1 text-3xl xl:text-4xl font-semibold text-foreground tracking-tight">
              <CounterAnimated amount={result.data.totalBalance} />
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
