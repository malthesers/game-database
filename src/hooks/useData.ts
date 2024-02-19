import { useEffect, useState } from 'react'
import apiClient from '../services/api-client'

interface Response<T> {
  count: number
  results: T[]
}

export default function useData<T>(path: string) {
  const [data, setData] = useState<T[] | null>([])
  const [error, setError] = useState<string>('')
  const [loaded, setLoaded] = useState<boolean>(false)

  useEffect(() => {
    apiClient
      .get<Response<T>>(path)
      .then((res) => {
        console.log(res.data)
        setData(res.data.results)
      })
      .catch((err) => setError(err.response))
      .finally(() => setLoaded(true))
  }, [])

  return { data, error, loaded }
}
