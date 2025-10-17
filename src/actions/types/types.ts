import { Transaction } from "@/app/(private)/transactions/columns";

export type APIResponseError = {
  message: string;
  error: string;
  statusCodes: number;
};

export type APIDeleteTransactionResponse = {
  message: string;
};

export type Pagination = {
  current_page: number;
  items_per_page: number;
  totalItems: number;
  total_pages: number;
};

export type APIAllTransactionsResponse = {
  message: string;
  userTransactions: Transaction[];
  pagination: Pagination;
};
