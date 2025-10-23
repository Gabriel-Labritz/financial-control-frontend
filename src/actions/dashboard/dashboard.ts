"use server";
import { cookies } from "next/headers";
import {
  APILastTransactionsResponse,
  APIMonthlyBalanceResponse,
  APIResponseError,
  APISummaryBalanceResponse,
} from "../types/types";

const API_BASE_URL = process.env.API_URL;

export async function getSummaryBalance() {
  const cookieStore = await cookies();
  const token = cookieStore.get("jwt")?.value;

  try {
    const res = await fetch(`${API_BASE_URL}/dashboard/summary`, {
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
          `Falha ao carregar balanço financeiro: ${errorData.statusCodes}`,
      };
    }
    const data: APISummaryBalanceResponse = await res.json();

    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error("Ocorreu um erro ao carregar o balanço financeiro:", error);

    return {
      success: false,
      error: "Erro de conexão ou exceção desconhecida.",
    };
  }
}

export async function getMonthlyBalance() {
  const cookieStore = await cookies();
  const token = cookieStore.get("jwt")?.value;

  try {
    const res = await fetch(`${API_BASE_URL}/dashboard/monthly-balance`, {
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
          `Falha ao carregar balanço financeiro mensal: ${errorData.statusCodes}`,
      };
    }
    const data: APIMonthlyBalanceResponse[] = await res.json();

    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error(
      "Ocorreu um erro ao carregar o balanço financeiro mensal:",
      error
    );

    return {
      success: false,
      error: "Erro de conexão ou exceção desconhecida.",
    };
  }
}

export async function getLastTransactions() {
  const cookieStore = await cookies();
  const token = cookieStore.get("jwt")?.value;

  try {
    const res = await fetch(`${API_BASE_URL}/dashboard/last-transactions`, {
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
          `Falha ao carregar as últimas transações: ${errorData.statusCodes}`,
      };
    }
    const data: APILastTransactionsResponse = await res.json();

    return {
      success: true,
      data: data.userTransactions,
    };
  } catch (error) {
    console.error("Ocorreu um erro ao carregar as últimas transações:", error);

    return {
      success: false,
      error: "Erro de conexão ou exceção desconhecida.",
    };
  }
}
