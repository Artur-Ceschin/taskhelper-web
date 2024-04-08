import { HeartHandshake } from 'lucide-react'
import { Outlet } from 'react-router-dom'

import GardenHelper from '@/assets/garden-helper.png'

export function AuthLayout() {
  return (
    <div className="grid min-h-screen antialiased sm:grid-cols-1 xl:grid-cols-2">
      <div className="relative flex flex-col items-center justify-center">
        <Outlet />
      </div>

      <div className="flex h-full flex-col justify-between border-r border-foreground/5 bg-background p-10 text-muted-foreground sm:invisible xl:visible">
        <div className="flex items-center gap-3 text-lg font-medium text-foreground">
          <HeartHandshake />
          <span className="font-semibold">taskhelpers</span>
        </div>

        <div className=" flex w-full items-center justify-center">
          <img src={GardenHelper} className="h-[700px] w-[650px]" alt="" />
        </div>

        <footer className="text-sm">
          Painel do cliente &copy; taskhelper - {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  )
}
