import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { ExpensesByCategoryBarChart } from "../ExpensesByCategoryBarChart";
import { getExpensesByCategory } from "@/actions/dashboard/dashboard";
import CardError from "../CardError";

export default async function ExpensesByCategoryCard() {
  const result = await getExpensesByCategory();

  if (!result.success && result.error) {
    return <CardError error={result.error} />;
  }

  if (!result.data) return;

  const chartData = result.data?.map((c) => {
    return {
      category: c.category,
      expenses: c.totalExpenses || 0,
      fill: `var(--color-${c.category})`,
    };
  });

  return (
    <Card className="border-none">
      <CardHeader>
        <CardDescription className="text-sm font-medium text-muted-foreground select-none">
          Despesas por categoria
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ExpensesByCategoryBarChart data={chartData} />
      </CardContent>
    </Card>
  );
}
