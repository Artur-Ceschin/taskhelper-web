import { Helmet } from 'react-helmet-async'

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { JobsTableFilters } from './jobs-table-filters'
import { JobsTableRow } from './jobs-table-row'

export function Jobs() {
  return (
    <>
      <Helmet title="Oportunidades" />

      <div className="gap4 flex flex-col">
        <h1 className="text-3x font-bold tracking-tight">Oportunidades</h1>
      </div>

      <div className="space-y-2.5">
        <JobsTableFilters />

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[64px]"></TableHead>
                <TableHead className="w-[160px]">Identificador</TableHead>
                <TableHead className="w-[180px]">Realizado há</TableHead>
                <TableHead className="w-[160px]">Status</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead className="w-[160px]">Total do serviço</TableHead>
                <TableHead className="w-[164px]"></TableHead>
                <TableHead className="w-[132px]"></TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {Array.from({ length: 10 }).map((_, index) => (
                <JobsTableRow key={index} />
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  )
}
