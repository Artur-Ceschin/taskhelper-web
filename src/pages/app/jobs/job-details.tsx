import whatsappIcon from '@/assets/whatsapp-icon.png'
import { Button } from '@/components/ui/button'
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function JobDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Cliente: Maria Francisca</DialogTitle>
        <DialogDescription>Detalhes do cliente</DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400" />
                  <span className="font-medium text-muted-foreground">
                    Pendente
                  </span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Cliente</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-muted-foreground">
                    Marcia Fernandez
                  </span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Email</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-muted-foreground">
                    marcia.ferenadez@uol.com
                  </span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">
                Solicitado há
              </TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-muted-foreground">
                    30 minutos
                  </span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">
                Localização
              </TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-muted-foreground">
                    Pelotas - RS
                  </span>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Serviço:</TableHead>
              <TableHead className="text-right">Qtd. Mês</TableHead>
              <TableHead className="text-right">Preço por visita</TableHead>
              <TableHead className="text-right">Subtotal</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell>Serviço de jardinagem</TableCell>
              <TableCell className="text-right">4</TableCell>
              <TableCell className="text-right">R$50,00</TableCell>
              <TableCell className="text-right">R$250,00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Table>
          <TableHeader className="">
            <TableRow>
              <TableHead>Descrição:</TableHead>
            </TableRow>
          </TableHeader>
          <TableRow>
            <TableBody>
              <TableCell>
                Gostaria de alguém que pudesse fazer o serviço de jardinagem,
                possuo um quintal de 100m2 com algumas arvores frutíferas
              </TableCell>
            </TableBody>
          </TableRow>

          <TableFooter>
            <TableRow>
              <TableCell className="mt-3 flex items-center justify-center">
                <Button className="flex items-center justify-center gap-2 bg-[#075E54] hover:bg-[#25D366]">
                  Entrar em contato{' '}
                  <img
                    className="h-6 w-6"
                    src={whatsappIcon}
                    alt="Ícone verde do whatsapp"
                  />
                </Button>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  )
}
