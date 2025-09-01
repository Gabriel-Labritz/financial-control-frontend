"use client";
import {
  BanknoteArrowDown,
  BanknoteArrowUp,
  Bus,
  DollarSign,
  Drama,
  Ellipsis,
  Hamburger,
  HeartPulse,
} from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { DialogClose, DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";

export default function TransactionForm() {
  const categoriesItems = [
    {
      value: "food",
      title: "Alimentação",
      icon: Hamburger,
    },
    {
      value: "transport",
      title: "Transporte",
      icon: Bus,
    },
    {
      value: "health",
      title: "Saúde",
      icon: HeartPulse,
    },
    {
      value: "entertainment",
      title: "Entreterimento",
      icon: Drama,
    },
    {
      value: "salary",
      title: "Salário",
      icon: DollarSign,
    },
    {
      value: "other",
      title: "Outro",
      icon: Ellipsis,
    },
  ];

  return (
    <form method="post">
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="title" className="text-sm lg:text-base font-sans">
            Título*
          </Label>
          <Input
            id="title"
            type="text"
            placeholder="ex: Uber black"
            className="py-5 text-sm font-sans"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="amount" className="text-sm lg:text-base font-sans">
            Valor*
          </Label>
          <Input
            id="amount"
            type="number"
            placeholder="ex: 20,96"
            step="0.01"
            className="py-5 max-w-[180px] text-sm font-sans"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="type" className="text-sm lg:text-base font-sans">
            Tipo*
          </Label>
          <Select>
            <SelectTrigger
              id="type"
              size="default"
              className="px-3 py-5 w-[180px] max-w-[180px] text-sm font-sans"
            >
              <SelectValue placeholder="ex: Saída" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="income">
                <BanknoteArrowUp color="var(--color-foreground)" /> Entrada
              </SelectItem>
              <SelectItem value="expense">
                <BanknoteArrowDown color="var(--color-foreground)" />
                Saída
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="category" className="text-sm lg:text-base font-sans">
            Categoria*
          </Label>
          <Select>
            <SelectTrigger
              id="category"
              size="default"
              className="px-3 py-5 w-[180px] max-w-[180px] text-sm font-sans"
            >
              <SelectValue placeholder="ex: Transporte" />
            </SelectTrigger>
            <SelectContent>
              {categoriesItems.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  <item.icon color="var(--color-foreground)"></item.icon>
                  {item.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label
            htmlFor="description"
            className="text-sm lg:text-base font-sans"
          >
            Descrição
          </Label>
          <Textarea
            id="description"
            placeholder="Adicione uma descrição..."
            maxLength={255}
            className="text-sm font-sans"
          />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" type="button">
              Voltar
            </Button>
          </DialogClose>
          <Button variant="default" type="submit">
            Adicionar
          </Button>
        </DialogFooter>
      </div>
    </form>
  );
}
