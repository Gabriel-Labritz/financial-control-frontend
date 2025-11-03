"use server";
import { cookies } from "next/headers";
import {
  APIAllTransactionsResponse,
  APICraetedTransactionResponse,
  APIDeleteTransactionResponse,
  APIGetTransactionByIdResponse,
  APIResponseError,
  APIUpdateTransactionResponse,
} from "../types/types";
import { revalidateTag } from "next/cache";
import { CreateUpdateTransactionSchema } from "@/schemas/transaction/create-updated-transaction.schema";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

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
        tags: [
          "user-created-transaction",
          "user-updated-transaction",
          "user_deleted_transaction",
        ],
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

export async function getTransactionById(id: string) {
  const cookieStore = await cookies();
  const token = cookieStore.get("jwt")?.value;

  try {
    const res = await fetch(`${API_BASE_URL}/transaction/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: `jwt=${token}`,
      },
      next: {
        tags: ["user-updated-transaction"],
      },
    });

    if (!res.ok) {
      const errorData: APIResponseError = await res.json();

      return {
        success: false,
        error:
          errorData?.message ||
          `Falha ao carregar as informações da transações, status: ${errorData.statusCodes}`,
      };
    }

    const data: APIGetTransactionByIdResponse = await res.json();

    return {
      success: true,
      transaction: data.transaction,
    };
  } catch (error) {
    console.error("Ocorreu um erro ao carregar a transação:", error);

    return {
      success: false,
      error: "Erro de conexão ou exceção desconhecida.",
    };
  }
}

export async function createTransaction(
  formData: CreateUpdateTransactionSchema
) {
  const cookieStore = await cookies();
  const token = cookieStore.get("jwt")?.value;

  try {
    const res = await fetch(`${API_BASE_URL}/transaction/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: `jwt=${token}`,
      },
      body: JSON.stringify(formData),
      cache: "no-store",
    });

    if (!res.ok) {
      const errorData: APIResponseError = await res.json();

      return {
        success: false,
        error:
          errorData?.message ||
          `Falha ao criar nova transações, status: ${errorData.statusCodes}`,
      };
    }

    const data: APICraetedTransactionResponse = await res.json();
    revalidateTag("user_created_transaction");

    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error("Ocorreu um erro ao criar a nova transação:", error);

    return {
      success: false,
      error: "Erro de conexão ou exceção desconhecida.",
    };
  }
}

export async function updateTransaction(
  id: string,
  formData: CreateUpdateTransactionSchema
) {
  const cookieStore = await cookies();
  const token = cookieStore.get("jwt")?.value;

  try {
    const res = await fetch(`${API_BASE_URL}/transaction/update/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Cookie: `jwt=${token}`,
      },
      body: JSON.stringify(formData),
      cache: "no-store",
    });

    if (!res.ok) {
      const errorData: APIResponseError = await res.json();

      return {
        success: false,
        error:
          errorData?.message ||
          `Falha ao atualizar a transações, status: ${errorData.statusCodes}`,
      };
    }

    const data: APIUpdateTransactionResponse = await res.json();
    revalidateTag("user_updated_transaction");

    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error("Ocorreu um erro ao atualizar a transação:", error);

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
