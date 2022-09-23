import React from 'react'
import { Outlet } from 'react-router-dom'
import { useAppRoutes } from '@/lib/hooks'
import Sidebar from './Sidebar'
import Menu from './Menu'
import './index.scss'

export default function Layout() {
  const { menuItems, active } = useAppRoutes()

  return (
    <div className="app-layout app-layout-has-sider">
      <Sidebar>
        <div className="app-logo">
          <h1>Money saver</h1>
        </div>
        <Menu items={menuItems} selected={active.key} />
      </Sidebar>
      <div className="app-layout">
        <main className="app-content">
          <h1>{active.title}</h1>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
