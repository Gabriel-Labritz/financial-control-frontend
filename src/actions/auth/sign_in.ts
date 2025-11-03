"use server";
import { SignInSchema } from "@/schemas/auth/sign_in.schema";
import { APIResponseError } from "../types/types";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

interface APISignInResponse {
  message: string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function signin(formData: SignInSchema) {
  try {
    const cookieStore = await cookies();

    const res = await fetch(`${API_BASE_URL}/auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      const errorData: APIResponseError = await res.json();

      return {
        success: false,
        error: errorData?.message || "Ocorreu um erro ao entrar com o usuário.",
      };
    }

    const data: APISignInResponse = await res.json();
    const setCookieHeader = res.headers.get("Set-Cookie");

    if (setCookieHeader) {
      const token = await setCookieHeader.split(";")[0].split("=")[1];

      const cookieOptions = {
        name: "jwt",
        value: token,
        secure: true,
        httpOnly: true,
        expires: new Date(jwtDecode(token).exp! * 1000),
        path: "/",
        sameSite: "lax" as const,
      };

      cookieStore.set(cookieOptions);
    }

    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error("Erro ao entrar com o usuário:", error);

    return {
      success: false,
      error: "Ocorreu um erro ao entrar com o usuário.",
    };
  }
}
