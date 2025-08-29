import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function TransactionForm() {
  return (
    <form action="" method="post">
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="title" className="text-sm lg:text-base font-sans">
            Título*
          </Label>
          <Input
            id="title"
            type="text"
            placeholder="ex: Uber black"
            className="h-10 text-sm font-sans"
          />
        </div>
      </div>
    </form>
  );
}
