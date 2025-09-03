import { ChartArea } from "lucide-react";

export default function LogoSite() {
  return (
    <div className="flex justify-center items-center gap-2">
      <ChartArea size={40} color="var(--color-primary)" />
      <h2 className="text-3xl text-primary font-bold font-sans tracking-tighter">
        FinanCash
      </h2>
    </div>
  );
}
