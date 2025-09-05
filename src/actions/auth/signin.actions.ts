"use server";
import { SignInPayload, SignInResponse } from "../types/auth/auth";
import { ApiResponse } from "../types/commons/common";

export async function signInUserAccount(
  userData: SignInPayload
): Promise<ApiResponse<SignInResponse>> {
  try {
    const res = await fetch(`${process.env.API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
      cache: "no-store",
    });

    if (!res.ok) {
      const errorData = await res.json();

      return {
        success: false,
        error: {
          message:
            errorData.message ?? "Ocorreu um erro inesperado, tente novamente.",
          statusCode: res.status,
          error: errorData.error,
        },
      };
    }

    const data = (await res.json()) as SignInResponse;

    return {
      success: true,
      data,
    };
  } catch {
    return {
      success: false,
      error: {
        message: "Ocorreu um erro no servidor. Tente novamente.",
        statusCode: 500,
        error: "Internal Server Error",
      },
    };
  }
}
