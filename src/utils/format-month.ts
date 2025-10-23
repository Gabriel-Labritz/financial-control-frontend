export function formatMonth(dateString: string) {
  const date = new Date(dateString + "-1");
  const monthName = date.toLocaleString("pt-BR", { month: "long" });
  return monthName;
}
