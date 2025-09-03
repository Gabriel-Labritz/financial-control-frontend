"use client";
import { Pie, PieChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { type: "expense", amount: 746.0, fill: "var(--color-chart-1)" },
  { type: "income", amount: 2322.0, fill: "var(--color-chart-2)" },
];

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

export function DoughnutChart() {
  return (
    <div className="flex-1 max-w-lg">
      <ChartContainer config={chartConfig} className="mx-auto aspect-square">
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie data={chartData} dataKey="amount" nameKey="type" />
        </PieChart>
      </ChartContainer>
    </div>
  );
}
