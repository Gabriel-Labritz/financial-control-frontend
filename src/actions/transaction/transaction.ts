"use server";
import { cookies } from "next/headers";
import {
  APIAllTransactionsResponse,
  APIDeleteTransactionResponse,
  APIResponseError,
} from "../types/types";
import { revalidateTag } from "next/cache";

const API_BASE_URL = process.env.API_URL;

export async function getAllTransactionsUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get("jwt")?.value;

  try {
    const res = await fetch(`${API_BASE_URL}/transaction/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: `jwt=${token}`,
      },
      next: {
        tags: ["user_deleted_transaction"],
      },
    });

    if (!res.ok) {
      const errorData: APIResponseError = await res.json();

      return {
        success: false,
        error:
          errorData?.message ||
          `Falha ao carregar as transações status: ${errorData.statusCodes}`,
      };
    }
    const data: APIAllTransactionsResponse = await res.json();

    return {
      success: true,
      userTransactions: data.userTransactions || [],
    };
  } catch (error) {
    console.error("Ocorreu um erro ao carregar as transações:", error);

    return {
      success: false,
      error: "Erro de conexão ou exceção desconhecida.",
    };
  }
}

export async function deleteTransaction(id: string) {
  const cookieStore = await cookies();
  const token = cookieStore.get("jwt")?.value;

  try {
    const res = await fetch(`${API_BASE_URL}/transaction/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Cookie: `jwt=${token}`,
      },
      cache: "no-store",
    });

    if (!res.ok) {
      const errorData: APIResponseError = await res.json();

      return {
        success: false,
        error:
          errorData?.message ||
          `Falha ao excluir a transações, status: ${errorData.statusCodes}`,
      };
    }

    const data: APIDeleteTransactionResponse = await res.json();
    revalidateTag("user_deleted_transaction");

    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error("Ocorreu um erro ao excluir a transação:", error);

    return {
      success: false,
      error: "Erro de conexão ou exceção desconhecida.",
    };
  }
}
