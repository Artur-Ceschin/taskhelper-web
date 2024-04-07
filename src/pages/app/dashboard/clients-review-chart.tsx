import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const data = [
  {
    date: '10/01',
    review: 5.0,
  },
  {
    date: '10/02',
    review: 4.0,
  },
  {
    date: '10/03',
    review: 3.5,
  },
  {
    date: '10/04',
    review: 3.7,
  },
  {
    date: '10/05',
    review: 4.0,
  },
]

export function ClientsReviewsChart() {
  return (
    <Card className="col-span-3">
      <CardHeader className="pb-8">
        <div className="flex items-center justify-between space-y-1 ">
          <CardTitle className="text-base font-medium">
            Avaliações dos seus clientes
          </CardTitle>
          <BarChart className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>

      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="date" />
            <YAxis domain={[0, 5]} />
            <Bar dataKey="review" fill="#193933" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
