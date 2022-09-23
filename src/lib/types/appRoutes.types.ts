import { ReactNode } from 'react'

export type TRoute = {
  key: string
  title?: string
  subTitile?: string
  path: string
  element: ReactNode
  children?: TRoute[]
  isMenuItem?: boolean
}

export type TRoutes = {
  items: TRoute[]
  menuItems: TRoute[]
  active: TRoute
}
