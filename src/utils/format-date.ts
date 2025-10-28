export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const formatedDate = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);

  return formatedDate;
}
