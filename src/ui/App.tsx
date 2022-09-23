import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from '@/ui/routes'

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}

export default App
