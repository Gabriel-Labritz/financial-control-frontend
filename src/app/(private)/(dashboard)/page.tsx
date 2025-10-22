import AnalyticsCards from "@/_components/AnalyticsCards";
import CardChartIncomeXExpense from "@/_components/CardChartIncomeXExpense";
import HeaderBox from "@/_components/HeaderBox";
import AnalyticsCardsSkeleton from "@/skeleton_components/AnalyticsCardsSkeleton";
import CardChartIncomeXExpenseSkeleton from "@/skeleton_components/CardChartIncomeXExpenseSkeleton";
import { Suspense } from "react";

export default function Dashboard() {
  return (
    <div className="p-4">
      <HeaderBox
        type="greeting"
        title="Bem vindo"
        user="Gabriel"
        subtext="Gerencie suas finanças com mais eficiência."
      />

      <section className="grid gap-8 mt-10">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">
          <Suspense fallback={<AnalyticsCardsSkeleton />}>
            <AnalyticsCards />
          </Suspense>
        </div>

        <Suspense fallback={<CardChartIncomeXExpenseSkeleton />}>
          <CardChartIncomeXExpense />
        </Suspense>
      </section>
    </div>
  );
}
