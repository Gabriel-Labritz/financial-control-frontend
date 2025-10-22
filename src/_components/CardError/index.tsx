import { Card, CardContent } from "@/components/ui/card";

export default function CardError({ error }: { error: string }) {
  return (
    <Card className="border-none w-full max-w-lg bg-destructive/10 text-destructive">
      <CardContent className="text-center p-6">
        <p>Ocorreu um erro:</p>
        <span>{error}</span>
      </CardContent>
    </Card>
  );
}
