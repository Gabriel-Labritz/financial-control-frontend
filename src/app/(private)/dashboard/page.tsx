import AnalyticsCards from "@/_components/AnalyticsCards";
import CardChartIncomeXExpense from "@/_components/CardChartIncomeXExpense";
import ExpensesByCategoryCard from "@/_components/ExpensesByCategoryCard";
import HeaderBox from "@/_components/HeaderBox";
import LastTransactionsCard from "@/_components/LastTransactionsCard";
import { MonthyCardOverview } from "@/_components/MonthyCardOverview";
import AnalyticsCardsSkeleton from "@/skeleton_components/AnalyticsCardsSkeleton";
import CardChartIncomeXExpenseSkeleton from "@/skeleton_components/CardChartIncomeXExpenseSkeleton";
import ExpensesByCategoryCardSkeleton from "@/skeleton_components/ExpensesByCategoryCardSkeleton";
import LastTransactionsCardSkeleton from "@/skeleton_components/LastTransactionsCardSkeleton";
import MonthyCardOverviewSkeleton from "@/skeleton_components/MonthyCardOverviewSkeleton";
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

      {/* CARDS AREA */}
      <section className="mt-10">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">
          <Suspense fallback={<AnalyticsCardsSkeleton />}>
            <AnalyticsCards />
          </Suspense>
        </div>
      </section>

      <section className="grid grid-cols-1 mt-8">
        <Suspense fallback={<MonthyCardOverviewSkeleton />}>
          <MonthyCardOverview />
        </Suspense>
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-3 mt-4 gap-4">
        <Suspense fallback={<CardChartIncomeXExpenseSkeleton />}>
          <CardChartIncomeXExpense />
        </Suspense>
        <Suspense fallback={<LastTransactionsCardSkeleton />}>
          <LastTransactionsCard />
        </Suspense>
        <Suspense fallback={<ExpensesByCategoryCardSkeleton />}>
          <ExpensesByCategoryCard />
        </Suspense>
      </section>
    </div>
  );
}
