export interface GameResponse {
  count: number
  results: Game[]
}

export interface Game {
  id: number
  name: string
  background_image: string
}
