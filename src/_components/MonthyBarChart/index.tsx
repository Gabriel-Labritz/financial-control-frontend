"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

interface MonthlyAreaChartData {
  month: string;
  income: number;
  expense: number;
}

interface MonthlyAreaChartProps {
  data: MonthlyAreaChartData[];
}

export default function MonthlyBarChart({ data }: MonthlyAreaChartProps) {
  const chartConfig = {
    income: {
      label: "Renda",
      color: "var(--chart-1)",
    },
    expense: {
      label: "Despesa",
      color: "var(--chart-2)",
    },
  } satisfies ChartConfig;

  return (
    <>
      <ChartContainer
        config={chartConfig}
        className="min-h-[250px] h-[300px] w-full"
      >
        <BarChart accessibilityLayer data={data}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar
            dataKey="income"
            fill="var(--color-chart-1)"
            radius={4}
            barSize={60}
          />
          <Bar
            dataKey="expense"
            fill="var(--color-chart-2)"
            radius={4}
            barSize={60}
          />
        </BarChart>
      </ChartContainer>
    </>
  );
}
