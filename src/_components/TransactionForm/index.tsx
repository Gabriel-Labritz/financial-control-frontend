import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function TransactionForm() {
  return (
    <form action="">
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel>Título</FieldLabel>
            <Input id="title" />
          </Field>
        </FieldGroup>
      </FieldSet>
    </form>
  );
}
