import { ReactNode } from 'react'

export type TRoute = {
  key: string
  label?: ReactNode
  title?: string
  caption?: string
  path: string
  element: ReactNode
  icon?: ReactNode
  children?: TRoute[]
}

export type TRoutes = {
  routes: TRoute[]
  selectedRoute: TRoute
  menuItems: TRoute[]
}
