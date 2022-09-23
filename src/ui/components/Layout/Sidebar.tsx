import React, { ReactNode } from 'react'

type TSidebar = {
  children: ReactNode
}

export default function Sidebar({ children }: TSidebar) {
  return <div className="app-sidebar">{children}</div>
}
