"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  expenses: {
    label: "Despesas: R$",
  },
  entertainment: {
    label: "Entreterimento",
    color: "var(--chart-2)",
  },
  health: {
    label: "Saúde",
    color: "var(--chart-1)",
  },
  food: {
    label: "Alimentação",
    color: "var(--chart-3)",
  },
  transport: {
    label: "Transporte",
    color: "var(--chart-4)",
  },
  other: {
    label: "Outro",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

interface ExpensesByCategoryBarChartData {
  category: string;
  expenses: number;
}

interface ExpensesByCategoryBarChartProps {
  data: ExpensesByCategoryBarChartData[];
}

export function ExpensesByCategoryBarChart({
  data,
}: ExpensesByCategoryBarChartProps) {
  return (
    <ChartContainer config={chartConfig}>
      <BarChart
        accessibilityLayer
        data={data}
        layout="vertical"
        margin={{
          left: 35,
        }}
      >
        <YAxis
          dataKey="category"
          type="category"
          tickLine={false}
          tickMargin={5}
          axisLine={false}
        />
        <XAxis dataKey="expenses" type="number" hide />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Bar dataKey="expenses" layout="vertical" radius={5} />
      </BarChart>
    </ChartContainer>
  );
}
