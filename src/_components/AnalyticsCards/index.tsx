import {
  ArrowLeftRight,
  BanknoteArrowDown,
  BanknoteArrowUp,
  Wallet,
} from "lucide-react";
import AnalyticsCardItem from "../AnalyticsCardItem";
import { getSummaryBalance } from "@/actions/dashboard/dashboard";
import CardError from "../CardError";
import { getAllTransactionsUser } from "@/actions/transaction/transaction";

export default async function AnalyticsCards() {
  const [resultSummaryBalance, resultAllTransaction] = await Promise.all([
    getSummaryBalance(),
    getAllTransactionsUser(),
  ]);

  if (!resultSummaryBalance.success && resultSummaryBalance.error) {
    return <CardError error={resultSummaryBalance.error} />;
  }

  if (!resultSummaryBalance.data || !resultAllTransaction.userTransactions)
    return;

  const totalTransactionCount = resultAllTransaction.userTransactions.length;

  return (
    <>
      <AnalyticsCardItem
        cardDescription="Balanço Total"
        amount={resultSummaryBalance.data.totalBalance}
        Icon={Wallet}
        isAmountCount
      />
      <AnalyticsCardItem
        cardDescription="Total em despesas"
        amount={resultSummaryBalance.data?.totalExpenses}
        Icon={BanknoteArrowDown}
        isAmountCount
      />

      <AnalyticsCardItem
        cardDescription="Total em renda"
        amount={resultSummaryBalance.data?.totalIncomes}
        Icon={BanknoteArrowUp}
        isAmountCount
      />

      <AnalyticsCardItem
        cardDescription="Total de transações"
        amount={totalTransactionCount}
        Icon={ArrowLeftRight}
        isAmountCount={false}
      />
    </>
  );
}
