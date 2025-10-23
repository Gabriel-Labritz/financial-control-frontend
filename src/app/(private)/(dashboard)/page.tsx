import AnalyticsCards from "@/_components/AnalyticsCards";
import CardChartIncomeXExpense from "@/_components/CardChartIncomeXExpense";
import HeaderBox from "@/_components/HeaderBox";
import { MonthyCardOverview } from "@/_components/MonthyCardOverview";
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

      <section className="mt-10">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">
          <Suspense fallback={<AnalyticsCardsSkeleton />}>
            <AnalyticsCards />
          </Suspense>
        </div>
      </section>

      <section className="grid grid-cols-1 mt-8">
        <MonthyCardOverview />
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-2 mt-8">
        <Suspense fallback={<CardChartIncomeXExpenseSkeleton />}>
          <CardChartIncomeXExpense />
        </Suspense>
      </section>
    </div>
  );
}
