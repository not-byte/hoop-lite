declare global {
  interface LoginPayload {
    email: string,
    password: string,
  }

  interface User {
    login: string,
    email: string,
    token?: string,
    avatar?: string
  }

  interface Player {
    name: string
  }

  interface Statistics {

  }
}

export {}