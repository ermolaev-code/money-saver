import { useLocation } from 'react-router-dom'
import { TRoutes, TRoute } from '@/lib/types'
import { getAppRoutes } from '@/lib/config'

const loopRoutes = (items: TRoute[], matcher: Function): TRoute[] => {
  return items.reduce<TRoute[]>((acc, route) => {
    if (route.children) return [...acc, ...loopRoutes(route.children, matcher)]

    return matcher(route) ? [...acc, route] : acc
  }, [])
}

const useAppRoutes = (): TRoutes => {
  const { pathname } = useLocation()
  const routes = getAppRoutes()
  const menuItems = loopRoutes(routes, (route: TRoute) => route.icon)
  const selectedRoute = loopRoutes(routes, (route: TRoute) => route.path === pathname)[0]

  return {
    routes,
    selectedRoute,
    menuItems,
  }
}

export default useAppRoutes
