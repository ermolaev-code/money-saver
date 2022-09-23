import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { TRoute } from '@/lib/types'

const getMenuItem = (items: TRoute[], selected: string): ReactNode => {
  return items.map(i => (
    <li key={i.key} className={selected === i.key ? 'item selected' : 'item'}>
      <Link to={i.path}>{i.title}</Link>
    </li>
  ))
}

type TMenu = {
  items: TRoute[]
  selected: string
}

export default function Menu({ items, selected }: TMenu) {
  return <ul className="app-menu">{getMenuItem(items, selected)}</ul>
}
