import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CounterAnimated from "../CounterAnimated";

interface AnalyticsCardItemProps {
  cardDescription: string;
  amount: number;
  Icon: React.ElementType;
  isAmountCount: boolean;
}

export default function AnalyticsCardItem({
  cardDescription,
  amount,
  Icon,
  isAmountCount,
}: AnalyticsCardItemProps) {
  return (
    <Card className="border-none">
      <CardHeader className="flex items-center">
        <div>
          <CardDescription className="text-sm font-medium text-muted-foreground select-none">
            {cardDescription}
          </CardDescription>
          <CardTitle className="flex-1 text-2xl text-foreground font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
            {isAmountCount ? <CounterAnimated amount={amount} /> : amount}
          </CardTitle>
        </div>
        <div className="flex justify-center items-center size-12 bg-primary rounded-lg ml-auto">
          <Icon color="var(--color-muted)" />
        </div>
      </CardHeader>
    </Card>
  );
}
