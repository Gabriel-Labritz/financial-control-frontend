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

export type APIGetTransactionByIdResponse = {
  message: string;
  transaction: Transaction;
};

export type APIUpdateTransactionResponse = {
  message: string;
  transaction: Transaction;
};

export type APICraetedTransactionResponse = {
  message: string;
  newTransaction: Transaction;
  user: {
    id: string;
  };
};

export type APISummaryBalanceResponse = {
  totalIncomes: number;
  totalExpenses: number;
  totalBalance: number;
};

export type APIMonthlyBalanceResponse = {
  month: string;
  totalIncomes: number;
  totalExpenses: number;
};

export type APILastTransactionsResponse = {
  message: string;
  userTransactions: Transaction[];
};

export type APIExpensesByCategoryResponse = {
  category: string;
  totalExpenses: number;
};

export type User = {
  id: string;
  name: string;
  email: string;
  profileImageUrl: string | null;
  createdAt: string;
};

export type APIUserProfileResponse = {
  message: string;
  user: User;
};

export type UserUpdated = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export type APIUpdateUserProfileResponse = {
  message: string;
  user: UserUpdated;
};

export type APIDeleteUserAccountResponse = {
  message: string;
};
