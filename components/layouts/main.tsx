import dynamic from 'next/dynamic'
import Link from 'next/link'
import React, { useState } from 'react';
import { ConfigProvider } from 'antd';
import enUS from 'antd/lib/locale/en_US';

import {
  SmileOutlined,
  SettingOutlined,
  PlaySquareOutlined,
  HeartOutlined,
  AimOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons'
import { Button } from 'antd'
import Header from './header'
import Footer from './footer'
import { Route, MenuDataItem } from '@ant-design/pro-layout/lib/typings'
import { SiderMenuProps } from '@ant-design/pro-layout/lib/SiderMenu/SiderMenu'
const ProLayout = dynamic(() => import('@ant-design/pro-layout'), {
  ssr: false,
})

const ROUTES: Route = {
  path: '/',
  routes: [
    {
      path: '/',
      name: 'home',
      icon: <SmileOutlined />,
      routes: [
        {
          path: '/menu1',
          name: 'Menu1',
          icon: <AimOutlined />,
        },
        {
          path: '/menu2',
          name: 'Menu2',
          icon: <SettingOutlined />,
        },
        {
          path: '/menu3',
          name: 'Menu3',
          icon: <HeartOutlined />,
          routes: [
            {
            path: '/menu3/submenu1',
            name: 'Sub menu1',
            icon: <AimOutlined />,
            },
            {
            path: '/menu3/submenu2',
            name: 'Sub Menu2',
            icon: <AimOutlined />,
          }
          ]
        },
      ],
    },
    {
      path: '/example',
      name: 'Example Page',
      icon: <PlaySquareOutlined />,
    },
  ],
}

const menuHeaderRender = (
  logoDom: React.ReactNode,
  titleDom: React.ReactNode,
  props: SiderMenuProps
) => (
    <Link href="/">
        {logoDom}
        {!props?.collapsed && titleDom}
    </Link>
  )

const menuItemRender = (options: MenuDataItem, element: React.ReactNode) => (
  <Link href={options.path}>
    {element}
  </Link>
)


export default function Main({ children }) {
  return (
    <ConfigProvider locale={enUS}>
      <ProLayout
        layout='mix'
        contentWidth='Fluid'
        fixedHeader={false}
        fixSiderbar={true}
        colorWeak={false}
        title='My App'
        style={{ minHeight: '100vh' }}
        route={ROUTES}
        menuItemRender={menuItemRender}
        // menuHeaderRender={menuHeaderRender}
        rightContentRender={() => <Header /> }
        footerRender={() => <Footer />}
      > 
        {children}
      </ProLayout>
  </ConfigProvider>
  )
}