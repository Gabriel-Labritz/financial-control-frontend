import BalanceCard from "@/_components/BalanceCard";
import HeaderBox from "@/_components/HeaderBox";
import BalanceCardSkeleton from "@/skeleton_components/BalanceCardSkeleton";
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

      <div className="mt-10">
        <Suspense fallback={<BalanceCardSkeleton />}>
          <BalanceCard />
        </Suspense>
      </div>
    </div>
  );
}
