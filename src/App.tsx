import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { router } from './routes'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | taskhelpers" />
      <RouterProvider router={router} />
      <Toaster richColors position="top-left" />
    </HelmetProvider>
  )
}
