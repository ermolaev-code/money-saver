import React from 'react'
import { Link } from 'react-router-dom'
import { CreditCardOutlined, HomeOutlined, TagsOutlined } from '@ant-design/icons'
import { TRoute } from '@/lib/types'
import { TransactionsPage, CategoriesPage, InvoicesPage } from '@/ui/pages'
import { AppLayout } from '@/ui/components'

export const getAppRoutes = (): TRoute[] => {
  return [
    {
      key: 'app',
      path: '/',
      element: <AppLayout />,
      children: [
        {
          key: 'transactions_page',
          label: <Link to="/">Главная</Link>,
          title: 'Главная',
          caption: 'Добро пожаловать, Username',
          path: '/',
          element: <TransactionsPage />,
          icon: <HomeOutlined />,
        },
        {
          key: 'categories_page',
          label: <Link to="/categories">Категории</Link>,
          title: 'Категории',
          path: '/categories',
          element: <CategoriesPage />,
          icon: <TagsOutlined />,
        },
        {
          key: 'invoices_page',
          label: <Link to="/invoices">Счета</Link>,
          title: 'Счета',
          path: '/invoices',
          element: <InvoicesPage />,
          icon: <CreditCardOutlined />,
        },
      ],
    },
  ]
}
