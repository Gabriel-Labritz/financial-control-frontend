import { getLastTransactions } from "@/actions/dashboard/dashboard";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { formatCurrency } from "@/utils/format-currency";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import CardError from "../CardError";

export default async function LastTransactionsCard() {
  const result = await getLastTransactions();

  if (!result.success && result.error) {
    return <CardError error={result.error} />;
  }
  return (
    <Card className="border-none">
      <CardHeader>
        <CardDescription className="flex items-center text-sm font-medium text-muted-foreground select-none">
          Últimas Atividades
          <Link href="/transactions" className="ml-auto">
            <Button type="button" variant="link">
              Visualizar todas
              <ArrowRight />
            </Button>
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent>
        {result.data?.map((transaction) => (
          <article
            key={transaction.id}
            className="flex justify-between items-center border-b p-4"
          >
            <p className="font-semibold text-sm">{transaction.title}</p>
            <div>
              <p
                className={`font-semibold text-sm ${
                  transaction.type === "expense"
                    ? "text-chart-2"
                    : "text-chart-1"
                }`}
              >
                {transaction.type === "expense"
                  ? `-${formatCurrency(Number(transaction.amount))}`
                  : `+${formatCurrency(Number(transaction.amount))}`}
              </p>
            </div>
          </article>
        ))}
      </CardContent>
    </Card>
  );
}
