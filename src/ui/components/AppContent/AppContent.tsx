import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout, Typography } from 'antd'
import { useAppRoutes } from '@/lib/hooks'
import './index.scss'

const { Content } = Layout
const { Title, Text } = Typography

export default function AppContent() {
  const {
    selectedRoute: { title, caption },
  } = useAppRoutes()

  return (
    <Content className="app-content">
      <div className="app-content-title">
        {title && <Title level={3}>{title}</Title>}
        {caption && <Text type="secondary">{caption}</Text>}
      </div>
      <Outlet />
    </Content>
  )
}
