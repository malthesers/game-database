export interface GameResponse {
  count: number
  results: Game[]
}

export interface Game {
  id: number
  name: string
  background_image: string
  genres: Genre[]
}

export interface Genre {
  games_count: number
  id: number
  image_background: string
  name: string
  slug: string
}
