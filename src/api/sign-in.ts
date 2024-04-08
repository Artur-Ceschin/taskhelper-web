import { api } from '@/lib/axios'

export interface SignInBody {
  email: string
  password: string
}

export interface SignInResponse {
  accessToken: string
}

export async function signIn({ email, password }: SignInBody) {
  const {
    data: { accessToken },
  } = await api.post('/sign-in', { email, password })

  return accessToken
}
