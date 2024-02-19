export interface Game {
  id: number
  name: string
  background_image: string
  genres: Genre[]
  platforms: Platform[]
  parent_platforms: ParentPlatform[]
  metacritic: number
}

export interface Genre {
  games_count: number
  id: number
  image_background: string
  name: string
  slug: string
}

export interface ParentPlatform {
  platform: {
    id: number
    name: string
    slug: string
  }
}
