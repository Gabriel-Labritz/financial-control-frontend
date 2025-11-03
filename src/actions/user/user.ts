"use server";

import { cookies } from "next/headers";
import {
  APIResponseError,
  APIUpdatedProfileImageResponse,
  APIUpdateUserProfileResponse,
  APIUserProfileResponse,
} from "../types/types";
import { EditProfileSchema } from "@/schemas/user/edit-profile-schema";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect-error";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getUserProfile() {
  const cookieStore = await cookies();
  const token = cookieStore.get("jwt")?.value;

  try {
    const res = await fetch(`${API_BASE_URL}/user/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: `jwt=${token}`,
      },
      next: {
        tags: ["user-update-profile", "user_updated-image-profile"],
      },
    });

    if (!res.ok) {
      const errorData: APIResponseError = await res.json();

      return {
        success: false,
        error:
          errorData?.message ||
          `Falha ao carregar as informações do perfil, status: ${errorData.statusCodes}`,
      };
    }
    const data: APIUserProfileResponse = await res.json();

    return {
      success: true,
      user: data.user,
    };
  } catch (error) {
    console.error(
      "Ocorreu um erro ao carregar as informações do perfil:",
      error
    );

    return {
      success: false,
      error: "Erro de conexão ou exceção desconhecida.",
    };
  }
}

export async function updateUserProfile(formData: EditProfileSchema) {
  const cookieStore = await cookies();
  const token = cookieStore.get("jwt")?.value;

  const { confirmPassword, email, ...userData } = formData;

  const updatePayload = Object.entries(userData).reduce((acc, [key, value]) => {
    if (value !== "") {
      acc[key] = value;
    }

    return acc;
  }, {} as { [key: string]: string });

  try {
    const res = await fetch(`${API_BASE_URL}/user/update`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Cookie: `jwt=${token}`,
      },
      body: JSON.stringify(updatePayload),
      cache: "no-store",
    });

    if (!res.ok) {
      const errorData: APIResponseError = await res.json();

      return {
        success: false,
        error:
          errorData?.message ||
          `Falha ao atualizar as informações do perfil, status: ${errorData.statusCodes}`,
      };
    }
    const data: APIUpdateUserProfileResponse = await res.json();
    revalidateTag("user-update-profile");

    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error(
      "Ocorreu um erro ao atualizar as informações do perfil:",
      error
    );

    return {
      success: false,
      error: "Erro de conexão ou exceção desconhecida.",
    };
  }
}

export async function deleteUserAccount() {
  const cookieStore = await cookies();
  const token = cookieStore.get("jwt")?.value;

  try {
    const res = await fetch(`${API_BASE_URL}/user/delete`, {
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
          `Falha ao excluir a conta do usuário, status: ${errorData.statusCodes}`,
      };
    }
    cookieStore.delete("jwt");
    redirect("/signin");
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }

    console.error("Ocorreu um erro ao excluir a conta do usuário:", error);

    return {
      success: false,
      error: "Erro de conexão ou exceção desconhecida.",
    };
  }
}

export async function updateUserProfileImage(fileData: FormData) {
  const cookieStore = await cookies();
  const token = cookieStore.get("jwt")?.value;

  try {
    const res = await fetch(`${API_BASE_URL}/user/upload-image`, {
      method: "PATCH",
      headers: {
        Cookie: `jwt=${token}`,
      },
      body: fileData,
      cache: "no-store",
    });

    if (!res.ok) {
      const errorData: APIResponseError = await res.json();

      return {
        success: false,
        error:
          errorData?.message ||
          `Falha ao atualizar a foto de perfil, status: ${errorData.statusCodes}`,
      };
    }
    const data: APIUpdatedProfileImageResponse = await res.json();
    revalidateTag("user_updated-image-profile");

    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error("Ocorreu um erro ao atualizar a imagem de perfil:", error);

    return {
      success: false,
      error: "Erro de conexão ou exceção desconhecida.",
    };
  }
}
