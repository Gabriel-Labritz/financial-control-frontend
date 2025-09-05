export interface SignUpPayload {
  nickName: string;
  email: string;
  password: string;
}

export interface SignUpResponse {
  message: string;
}

export interface SignInPayload {
  email: string;
  password: string;
}

export interface SignInResponse {
  message: string;
}
