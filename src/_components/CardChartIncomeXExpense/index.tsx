import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import PieChartDonut, { PieChartData } from "../PieChartDonut";
import { getSummaryBalance } from "@/actions/dashboard/dashboard";
import CardError from "../CardError";

export default async function CardChartIncomeXExpense() {
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
    <Card className="flex flex-col w-full border-none">
      <CardHeader className="items-center pb-0">
        <CardDescription className="text-sm font-medium text-muted-foreground select-none">
          Relação Entradas X Despesas
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <PieChartDonut data={chartData} />
      </CardContent>
    </Card>
  );
}
