import React from 'react'
import { Sider, Content, Footer } from '@/ui/components'
import './index.scss'

export default function Layout() {
  return (
    <div className="layout">
      <Sider />
      <div className="layout">
        <Content />
        <Footer />
      </div>
    </div>
  )
}
