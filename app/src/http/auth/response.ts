export type UserResponse = {
  readonly id: string
  readonly mail: string
}

export type TokenResponse = {
  readonly token: {
    readonly hash: string
    readonly expire: number
  }
  readonly renew: {
    readonly hash: string
    readonly expire: number
  }
}
