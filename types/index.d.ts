declare global {
  interface LoginPayload {
    email: string;
    password: string;
  }

  interface RegisterPayload extends LoginPayload {
    firstName: string;
    lastName: string;
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
