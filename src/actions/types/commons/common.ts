export type ApiResponseSuccess<T> = {
  success: true;
  data: T;
};

export type ApiResponseError = {
  success: false;
  error: {
    message: string;
    error?: string;
    statusCode: number;
  };
};

export type ApiResponse<T> = ApiResponseSuccess<T> | ApiResponseError;
