import { Briefcase, HeartHandshake, Home } from 'lucide-react'

import { NavLink } from './nav-link'
import { ThemeToggle } from './theme/theme-toggle'
import { Separator } from './ui/separator'

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <div className="flex items-center gap-3 text-lg font-medium text-foreground">
          <HeartHandshake />
          <span className="font-semibold">taskhelpers</span>
        </div>

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center justify-center space-x-6 lg:space-x-6">
          <NavLink to="/">
            <Home className="h-4 w-4" />
            Início
          </NavLink>

          <NavLink to="/works">
            <Briefcase className="h-4 w-4" />
            Trabalhos
          </NavLink>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}
