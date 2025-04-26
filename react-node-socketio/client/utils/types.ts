export interface Imessage {
  username: string
  message: string,
}

export interface Istate {
  username: string,
  messages: Imessage[]
}