import React from 'react'
// import { Outlet } from 'react-router-dom'
// import { useAppRoutes } from '@/lib/hooks'
// import Sidebar from './Sidebar'
// import Menu from './Menu'
import { useMql } from './useMql'
import './index.scss'

export default function Layout() {
  // const { menuItems, active } = useAppRoutes()
  const query = useMql()
  console.log(query)

  return (
    <div className="layout">
      <div className="sidebar">Sidebar</div>
      <div className="layout">
        <div className="content">Content</div>
        <div className="footer">Footer</div>
      </div>
    </div>
  )
}
