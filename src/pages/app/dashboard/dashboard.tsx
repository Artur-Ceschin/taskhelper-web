import { Helmet } from 'react-helmet-async'

import { CancelClientsAmountCard } from './cancel-clients-amount-card'
import { ClientsReviewsChart } from './clients-review-chart'
import { MonthClientsAmountCard } from './month-clients-amount-card'
import { MonthRevenueCard } from './month-revenue-card'
import { RevenueChart } from './revenue-chart'
import { WeekClientsAmountCard } from './week-clients-amount-card'

export default function Dashboard() {
  return (
    <>
      <Helmet title="Login" />

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthClientsAmountCard />
          <WeekClientsAmountCard />
          <CancelClientsAmountCard />
        </div>

        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
          <ClientsReviewsChart />
        </div>
      </div>
    </>
  )
}
