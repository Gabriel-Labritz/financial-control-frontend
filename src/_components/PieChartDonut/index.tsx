"use client";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Pie, PieChart } from "recharts";

export interface PieChartData {
  type: "expense" | "income";
  amount: number;
  fill: string;
}

interface PieChartDonutProps {
  data: PieChartData[];
}

export default function PieChartDonut({ data }: PieChartDonutProps) {
  const chartConfig = {
    expense: {
      label: "Total saídas",
      color: "var(--chart-1)",
    },
    income: {
      label: "Total entradas",
      color: "var(--chart-2)",
    },
  } satisfies ChartConfig;

  return (
    <div className="flex-1">
      <ChartContainer config={chartConfig} className="mx-auto aspect-square">
        <PieChart width={120} height={120}>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={data}
            dataKey="amount"
            nameKey="type"
            innerRadius={40}
            outerRadius={120 / 2}
          />
        </PieChart>
      </ChartContainer>
    </div>
  );
}
