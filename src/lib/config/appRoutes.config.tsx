import React from 'react'
import { TRoute } from '@/lib/types'
import { TransactionsPage, CategoriesPage, InvoicesPage } from '@/ui/pages'
import { Layout } from '@/ui/components'

export const getAppRoutes = (): TRoute[] => {
  return [
    {
      key: 'app',
      path: '/',
      element: <Layout />,
      children: [
        {
          key: 'transactions_page',
          title: 'Главная',
          subTitile: 'Добро пожаловать, Username',
          path: '/',
          element: <TransactionsPage />,
          isMenuItem: true,
        },
        {
          key: 'categories_page',
          title: 'Категории',
          path: '/categories',
          element: <CategoriesPage />,
          isMenuItem: true,
        },
        {
          key: 'invoices_page',
          title: 'Счета',
          path: '/invoices',
          element: <InvoicesPage />,
          isMenuItem: true,
        },
      ],
    },
  ]
}
