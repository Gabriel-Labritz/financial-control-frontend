import HeaderBox from "@/_components/HeaderBox";

export default function Dashboard() {
  return (
    <div className="p-4">
      <HeaderBox
        type="greeting"
        title="Bem vindo"
        user="Gabriel"
        subtext="Gerencie suas finanças com mais eficiência."
      />
    </div>
  );
}
