import { create } from 'zustand'
import { Genre, Platform, QueryParams } from '../types'

interface GameQueryStore {
  queryParams: QueryParams
  setGenre: (genre: Genre) => void
  setPlatform: (platform: Platform) => void
  setSorting: (sortOrder: string) => void
  setSearch: (search: string) => void
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  queryParams: {
    genre: null,
    platform: null,
    sorting: '',
    search: ''
  },
  setSearch: (search) => set((store) => ({ queryParams: { ...store.queryParams, search } })), //when searching, we clear the other filters
  setGenre: (genre) => set((store) => ({ queryParams: { ...store.queryParams, genre } })),
  setPlatform: (platform) => set((store) => ({ queryParams: { ...store.queryParams, platform } })),
  setSorting: (sorting) => set((store) => ({ queryParams: { ...store.queryParams, sorting } }))
}))

export default useGameQueryStore
