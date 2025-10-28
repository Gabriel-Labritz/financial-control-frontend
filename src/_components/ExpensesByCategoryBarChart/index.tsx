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
  entreterimento: {
    label: "Entreterimento",
    color: "var(--chart-2)",
  },
  saúde: {
    label: "Saúde",
    color: "var(--chart-1)",
  },
  alimentação: {
    label: "Alimentação",
    color: "var(--chart-3)",
  },
  transporte: {
    label: "Transporte",
    color: "var(--chart-4)",
  },
  outro: {
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
