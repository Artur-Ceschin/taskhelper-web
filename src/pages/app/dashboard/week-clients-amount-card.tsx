import { DollarSign } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function WeekClientsAmountCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Clientes para a semana(mês)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">4</span>
        <p className="text-xs text-muted-foreground">
          <span className="text-rose-500 dark:text-rose-300">-1%</span> em
          relação ao mês passado
        </p>
      </CardContent>
    </Card>
  )
}
