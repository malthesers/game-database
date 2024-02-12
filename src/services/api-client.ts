import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://rawg.io/api/',
  timeout: 1000,
  params: {
    key: import.meta.env.VITE_API_KEY
  }
})

export default apiClient
