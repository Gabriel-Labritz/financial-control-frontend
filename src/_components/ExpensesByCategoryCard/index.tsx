import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

export default function ExpensesByCategoryCard() {
  return (
    <Card className="border-none">
      <CardHeader>
        <CardDescription>CardExpensesByCategory Here!</CardDescription>
      </CardHeader>
      <CardContent>BarChart Here!</CardContent>
    </Card>
  );
}
