declare global {
  enum Category {
    OPEN,
    SCHOOL,
  }

  interface PlayerPayload {
    first_name: string;
    last_name: string;
    age?: number;
  }

  interface FormPayload {
    name: string;
    category?: Category;
    email: string;
    phone?: number;
    players: PlayerPayload[];
  }

  interface LoginPayload {
    email: string;
    password: string;
  }

  interface RegisterPayload extends LoginPayload {
    first_name: string;
    last_name: string;
    repeated_password: string;
  }

  interface ResetPayload {
    email: string;
  }

  interface RecoveryPayload {
    password: string;
    repeated_password: string;
  }

  enum VerifyStatus {
    SUCCESS,
    INVALID,
    ERROR,
  }

  interface VerifyPayload {
    token: string;
  }

  enum InviteStatus {
    SUCCESS,
    INVALID,
    ERROR,
    AWAIT,
  }

  interface InvitePayload {
    token: string;
  }
}

export {};
