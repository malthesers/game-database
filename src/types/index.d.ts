export interface GameResponse {
  count: number
  results: Game[]
}

export interface Game {
  id: number
  name: string
  background_image: string
  genres: Genre[]
  platforms: Platform[]
  parent_platforms: ParentPlatform[]
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
  platform: PlatformInfo
  released_at: string
  requirements_en: {
    minimum: string
    recommended: string
  }
}

export interface PlatformInfo {
  games_count: number
  id: number
  image_background: string
  name: string
  slug: string
}
