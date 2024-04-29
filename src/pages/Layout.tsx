import { useState } from 'react'
import Header from '../components/header/Header'
import { QueryParams } from '../types'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  const [queryParams, setQueryParams] = useState<QueryParams>({} as QueryParams)

  return (
    <>
      <Header updateSearch={(input: string) => setQueryParams({ ...queryParams, search: input })} />
      <Outlet />
    </>
  )
}
