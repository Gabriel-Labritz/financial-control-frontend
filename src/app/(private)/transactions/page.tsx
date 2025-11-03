import HeaderBox from "@/_components/HeaderBox";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { getAllTransactionsUser } from "@/actions/transaction/transaction";

export default async function Transactions() {
  const transactions = await getAllTransactionsUser();

  return (
    <div className="p-4 h-screen">
      <HeaderBox
        type="title"
        title="Suas Transações"
        subtext="Visualize e gerencie todas transações realizadas por você."
      />
      <section className="mt-10">
        <DataTable
          columns={columns}
          data={transactions?.userTransactions || []}
        />
      </section>
    </div>
  );
}
