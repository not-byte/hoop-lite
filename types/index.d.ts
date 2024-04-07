declare global {
  interface LoginPayload {
    email: string;
    password: string;
  }

  interface RegisterPayload extends LoginPayload {
    first_name: string;
    last_name: string;
    repeated_password: string;
  }

  interface User {
    login: string;
    email: string;
    token?: string;
    avatar?: string;
  }

  interface Player {
    name: string;
  }

  interface Statistics {}
}

export {};
