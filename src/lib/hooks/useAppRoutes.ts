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
  const items = getAppRoutes()
  const menuItems = loopRoutes(items, (route: TRoute) => route.isMenuItem)
  const active = loopRoutes(items, (route: TRoute) => route.path === pathname)[0]

  return {
    items,
    menuItems,
    active,
  }
}

export default useAppRoutes
