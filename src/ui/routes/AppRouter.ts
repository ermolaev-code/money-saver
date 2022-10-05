import { useRoutes } from 'react-router-dom'
import { useAppRoutes } from '@/lib/hooks'

export default function AppRouter() {
  const { routes } = useAppRoutes()
  const appRoutes = useRoutes(routes)

  return appRoutes
}
