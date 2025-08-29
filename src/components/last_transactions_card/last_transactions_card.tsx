import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import formatCurrency from "@/utils/format_currency";
import { Button } from "../ui/button";
import Link from "next/link";

export default function LastTransactionsCard() {
  return (
    <Card className="flex-1">
      <CardHeader>
        <CardDescription className="flex items-center text-sm sm:text-base font-sans">
          Últimas transações
          <Link href="#" className="ml-auto">
            <Button type="button" variant="ghost">
              Ver todas
              <ArrowRight />
            </Button>
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <article className="flex justify-between items-center border-b p-2">
          <p className="font-sans font-semibold text-sm lg:text-base">
            Uber Black
          </p>
          <div>
            <p className="font-sans font-semibold text-sm lg:text-base">
              {formatCurrency(20)}
            </p>
          </div>
        </article>
        <article className="flex justify-between items-center border-b p-2">
          <p className="font-sans font-semibold text-sm lg:text-base">
            Convênio médico
          </p>
          <div>
            <p className="font-sans font-semibold text-sm lg:text-base">
              {formatCurrency(190.5)}
            </p>
          </div>
        </article>
      </CardContent>
    </Card>
  );
}
