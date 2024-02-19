import { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { Genre, GenreResponse } from '../types'

export default function useGames() {
  const [genres, setGenres] = useState<Genre[]>([])
  const [error, setError] = useState<string>('')
  const [loaded, setLoaded] = useState<boolean>(false)

  useEffect(() => {
    apiClient
      .get<GenreResponse>('genres')
      .then((res) => {
        console.log(res.data)
        setGenres(res.data.results)
      })
      .catch((err) => setError(err.response))
      .finally(() => setLoaded(true))
  }, [])

  return { genres, error, loaded }
}
