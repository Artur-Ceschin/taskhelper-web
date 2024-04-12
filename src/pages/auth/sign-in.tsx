import { useMutation } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { signIn } from '@/api/sign-in'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signInForm = z.object({
  email: z.string({ required_error: 'Digite o seu email' }).email(),
  password: z.string({ required_error: 'Digite o seu email' }),
})

type SignInForm = z.infer<typeof signInForm>

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>()

  const { mutateAsync } = useMutation({
    mutationFn: signIn,
  })

  async function handleSignIn(data: SignInForm) {
    try {
      const { email, password } = signInForm.parse(data)

      const accessToken = await mutateAsync({ email, password })

      toast.success('Usuário válido', accessToken)
    } catch (error) {
      toast.error('Realize o seu cadastro')
    }
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <Button variant="outline" asChild className="absolute left-8 top-8">
          <Link to="/sign-up">Crie sua conta e se torne um taskhelpers</Link>
        </Button>
        <div className="flex w-[360px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar o painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe seus serviços atuais e busque por outros helpers na
              plataforma
            </p>
          </div>

          <form className="space-y-2" onSubmit={handleSubmit(handleSignIn)}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" {...register('password')} />
            </div>

            <Button disabled={isSubmitting} className="w-full" type="submit">
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
