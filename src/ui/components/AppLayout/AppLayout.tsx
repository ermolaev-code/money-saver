import React from 'react'
import { Layout } from 'antd'
import { AppContent, AppSider, AppSiderMobile } from '@/ui/components'
import { useMediaQueries } from '@/lib/hooks'
import './index.scss'

const { Header, Footer } = Layout

export default function AppLayout() {
  const { sm } = useMediaQueries()

  if (sm) {
    return (
      <Layout className="app-layout">
        <Header className="app-header">
          <AppSiderMobile />
        </Header>
        <AppContent />
        <Footer className="app-footer">Footer</Footer>
      </Layout>
    )
  }

  return (
    <Layout className="app-layout">
      <AppSider />
      <Layout>
        <Header className="app-header" />
        <AppContent />
        <Footer className="app-footer">Footer</Footer>
      </Layout>
    </Layout>
  )
}
