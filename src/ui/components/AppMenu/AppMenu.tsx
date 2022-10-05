import React from 'react'
import { Menu } from 'antd'
import { useAppRoutes } from '@/lib/hooks'

export default function AppMenu() {
  const {
    menuItems,
    selectedRoute: { key },
  } = useAppRoutes()

  return <Menu mode="inline" defaultSelectedKeys={[key]} items={menuItems} />
}
