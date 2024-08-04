export interface Game {
  id: number
  name: string
  slug: string
  background_image: string
  genres: Genre[]
  platforms: Platform[]
  parent_platforms: ParentPlatform[]
  metacritic: number
  description_raw: string
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

export interface Platform {
  id: number
  name: string
  slug: string
}

export interface QueryParams {
  genre: Genre | null
  platform: Platform | null
  sorting: string
  search: string
}
