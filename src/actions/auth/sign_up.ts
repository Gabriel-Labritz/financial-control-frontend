"use server";

import { SignUpSchema } from "@/schemas/auth/sign_up.schema";
import { APIResponseError } from "../types/types";

type APISignUpResponse = {
  message: string;
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function signup(formData: SignUpSchema) {
  try {
    const { confirmPassword, ...userData } = formData;

    const res = await fetch(`${API_BASE_URL}/user/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!res.ok) {
      const errorData: APIResponseError = await res.json();

      return {
        success: false,
        error: errorData?.message || "Ocorreu um erro ao criar sua conta.",
      };
    }

    const data: APISignUpResponse = await res.json();

    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error("Erro ao registrar usuário:", error);

    return {
      success: false,
      error: "Ocorreu um erro ao criar conta.",
    };
  }
}
