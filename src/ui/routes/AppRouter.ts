import { useRoutes } from 'react-router-dom'
import { useAppRoutes } from '@/lib/hooks'

export default function AppRouter() {
  const { items } = useAppRoutes()
  const routes = useRoutes(items)

  return routes
}
