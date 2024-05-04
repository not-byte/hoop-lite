declare global {
  interface FormPayload {
    email: string;
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
  class Arena {
    id: bigint;
    city_id: bigint;
    arena_name: string;
    city_name: string;
    coordinates: string;
  }
  enum AccountType {
    PLAYER,
    OWNER,
    REFEREE,
    ADMIN,
  }
  class Account {
    id: bigint;
    player_id: bigint;
    team_id?: bigint;
    email: string;
    verified: boolean;
    signed_agreement: boolean;
    type: AccountType;
    token?: string;
    avatar?: string;
    constructor() {}
  }
  enum Position {
    PG,
    SG,
    SF,
    PF,
    C,
  }
  class Player {
    position: Position;
    height: int;
    gender: boolean;
    constructor() {}
  }
  class Team {
    id: bigint;
    owner_id: bigint;
    name: string;
    created: Date;
    constructor() {}
  }
  interface Statistics {
    points: int;
  }
}
export {};