"use client";

import { CardFooter } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import React from "react";
import { Pie, PieChart } from "recharts";
import CounterAnimated from "../CounterAnimated";

export interface PieChartData {
  type: "expense" | "income";
  amount: number;
  fill: string;
}

interface PieChartDonutProps {
  data: PieChartData[];
}

export default function PieChartDonut({ data }: PieChartDonutProps) {
  const totalInTransactions = React.useMemo(() => {
    return data.reduce((acc, curr) => acc + curr.amount, 0);
  }, [data]);

  const chartConfig = {
    expense: {
      label: "Despesas",
      color: "var(--chart-1)",
    },
    income: {
      label: "Entradas",
      color: "var(--chart-2)",
    },
  } satisfies ChartConfig;

  return (
    <div className="flex-1">
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-w-[250px]"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={data}
            dataKey="amount"
            nameKey="type"
            innerRadius={60}
            strokeWidth={10}
          />
        </PieChart>
      </ChartContainer>

      <CardFooter className="flex-col gap-2 text-sm">
        <div className="text-muted-foreground leading-none text-sm">
          Total em transações realizadas
        </div>
        <div className="flex items-center gap-2 leading-none font-semibold text-2xl">
          <CounterAnimated amount={totalInTransactions} />
        </div>
      </CardFooter>
    </div>
  );
}
