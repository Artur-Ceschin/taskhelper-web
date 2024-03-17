import { HeartHandshake } from 'lucide-react'
import { Outlet } from 'react-router-dom'

import GardenHelper from '@/assets/garden-helper.png'

export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-2">
      <div className="relative flex flex-col items-center justify-center">
        <Outlet />
      </div>

      <div className="flex h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground">
        <div className="flex items-center gap-3 text-lg font-medium text-foreground">
          <HeartHandshake />
          <span className="font-semibold">taskhelpers</span>
        </div>

        <div className="flex w-full items-center justify-center">
          <img src={GardenHelper} className="h-[650px] w-[550px]" alt="" />
        </div>

        <footer className="text-sm">
          Painel do cliente &copy; taskhelper - {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  )
}
