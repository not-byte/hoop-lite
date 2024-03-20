export interface LoginPayload {
  email: string,
  password: string,
}

export interface User {
  login: string,
  email: string,
  token?: string,
  avatar?: string
}

export interface Player {
  name: string
}

export interface Statistics {

}