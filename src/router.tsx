import { createBrowserRouter } from 'react-router-dom'
import Layout from './pages/Layout'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
import GamePage from './pages/GamePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: 'games/:slug', element: <GamePage /> }
    ]
  }
])

export default router
