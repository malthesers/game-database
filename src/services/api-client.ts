import axios, { AxiosRequestConfig } from 'axios'

export interface FetchResponse<T> {
  count: number
  next: string | null
  results: T[]
}

const axiosInstance = axios.create({
  baseURL: 'https://rawg.io/api/',
  timeout: 1000,
  params: {
    key: import.meta.env.VITE_API_KEY
  }
})

class ApiClient<T> {
  endpoint: string

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  getAll = (config?: AxiosRequestConfig) =>
    axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then((res) => res.data)

  getOne = (slug: string) => axiosInstance.get<T>(`${this.endpoint}/${slug}`).then((res) => res.data)
}

export default ApiClient
