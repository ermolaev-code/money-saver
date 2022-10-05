import React, { useState } from 'react'
import { Layout } from 'antd'
import { AppMenu, AppLogo } from '@/ui/components'
import './index.scss'

const { Sider } = Layout

export default function AppSider() {
  const [collapse, setCollapse] = useState(false)

  const handleCollapse = (newCollapse: boolean, type: string): void => {
    if (type === 'responsive') {
      return setCollapse(newCollapse)
    }

    return setCollapse(prevCollapse => !prevCollapse)
  }

  return (
    <Sider
      breakpoint="md"
      className="app-sider"
      collapsible
      collapsed={collapse}
      onCollapse={handleCollapse}
    >
      <AppLogo />
      <AppMenu />
    </Sider>
  )
}
