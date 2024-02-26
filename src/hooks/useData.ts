import { AxiosRequestConfig, CanceledError } from 'axios'
import { useEffect, useState } from 'react'
import apiClient from '../services/api-client'

interface Response<T> {
  count: number
  results: T[]
}

export default function useData<T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  dependencies?: unknown[]
) {
  const [data, setData] = useState<T[] | null>([])
  const [error, setError] = useState<string>('')
  const [loaded, setLoaded] = useState<boolean>(false)

  useEffect(
    () => {
      setLoaded(false)
      const controller = new AbortController()

      apiClient
        .get<Response<T>>(endpoint, { signal: controller.signal, ...requestConfig })
        .then((res) => {
          console.log(res.data)
          setData(res.data.results)
        })
        .catch((err) => {
          if (err instanceof CanceledError) return
          setError(err.response)
        })
        .finally(() => {
          if (!controller.signal.aborted) {
            setLoaded(true)
          }
        })

      return () => {
        if (controller.signal.aborted) {
          controller.abort()
        }
      }
    },
    dependencies ? [...dependencies] : []
  )

  return { data, error, loaded }
}
