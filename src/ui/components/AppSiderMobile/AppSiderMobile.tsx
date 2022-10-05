import React, { useState } from 'react'
import { Button, Drawer } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import { AppMenu, AppLogo } from '@/ui/components'
import './index.scss'

export default function AppSiderMobile() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(prevOpen => !prevOpen)

  return (
    <>
      <Button icon={<MenuOutlined />} onClick={handleOpen} />
      <Drawer
        placement="left"
        className="app-sider-mobile"
        title={<AppLogo />}
        open={open}
        onClose={handleOpen}
      >
        <AppMenu />
      </Drawer>
    </>
  )
}
