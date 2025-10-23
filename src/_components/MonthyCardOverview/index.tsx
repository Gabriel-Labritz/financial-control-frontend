import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { getMonthlyBalance } from "@/actions/dashboard/dashboard";
import { formatMonth } from "@/utils/format-month";
import MonthlyBarChart from "../MonthyBarChart";
import CardError from "../CardError";

export async function MonthyCardOverview() {
  const result = await getMonthlyBalance();

  if (!result.success && result.error) {
    return <CardError error={result.error} />;
  }

  if (!result.data) return;

  const chartData = result?.data?.map((month) => {
    const dateString = month.month;
    const monthName = formatMonth(dateString);

    return {
      month: monthName,
      income: month.totalIncomes || 0,
      expense: month.totalExpenses || 0,
    };
  });

  return (
    <Card className="flex-1 border-none">
      <CardHeader>
        <CardDescription className="text-sm font-medium text-muted-foreground select-none">
          Overview Mensal
        </CardDescription>
      </CardHeader>
      <CardContent>
        <MonthlyBarChart data={chartData} />
      </CardContent>
    </Card>
  );
}
