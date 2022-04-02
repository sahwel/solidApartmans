import React, { FunctionComponent, memo } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../../components/Button'
import { LoginModel, validateExpire } from '../../services/userDefinitions'
import cl from 'classnames'
import { axiosInstance } from '../../services/axiosInstance'
import { getCsrfToken, getSession, signIn } from 'next-auth/react'
import { GetServerSideProps } from 'next'

interface LoginProps {
  csrfToken: string
}

const login: FunctionComponent<LoginProps> = memo(
  function Login({ csrfToken }) {
    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm<LoginModel>({ defaultValues: { email: '', password: '' } })

    const onSubmit = async (data: LoginModel) => {
      try {
        const response = await axiosInstance.post('admin/login', { ...data })
        console.log(response.data)

        signIn('credentials', {
          ...response.data,
          callbackUrl: `${window.location.origin}/admin`,
        })
      } catch (error: any) {
        console.log(error)
      }
    }
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <div className=" w-[30rem]  rounded-2xl border-2 border-main-blue p-8 shadow-2xl">
          <h1 className="mb-5 text-2xl font-bold">Bejelentkezés</h1>
          <form className="grid gap-y-2" onSubmit={handleSubmit(onSubmit)}>
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <div className="grid">
              <label
                htmlFor="login-email"
                className={cl(
                  'pl-2 text-sm',
                  errors.email?.message && 'text-red-600'
                )}
              >
                Email
              </label>
              <input
                {...register('email', { required: 'Ez a mező kötelező!' })}
                type="text"
                id="login-email"
                placeholder="john.doe@gmail.com"
                className={cl(
                  'rounded-xl border-[1px] border-main-blue px-4 py-1',
                  errors.email?.message && '!border-red-600'
                )}
              />
              {errors.email?.message && (
                <span className="ml-2 text-sm text-red-600">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="grid">
              <label
                htmlFor="login-password"
                className={cl(
                  'pl-2 text-sm',
                  errors.password?.message && 'text-red-600'
                )}
              >
                Password
              </label>
              <input
                {...register('password', { required: 'Ez a mező kötelező!' })}
                type="password"
                id="login-password"
                placeholder="***********"
                className={cl(
                  'rounded-xl border-[1px] border-main-blue px-4 py-1',
                  errors.password?.message && '!border-red-600'
                )}
              />
              {errors.password?.message && (
                <span className="ml-2 text-sm text-red-600">
                  {errors.password.message}
                </span>
              )}
            </div>
            <Button
              title="Bejelentkezés"
              classNames="!mt-5 w-1/2 py-2 "
              type="submit"
            />
          </form>
        </div>
      </div>
    )
  },
  (oldProps, newProps) => oldProps.csrfToken === newProps.csrfToken
)

export default login

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)

  if (session && !validateExpire(session.expires)) {
    return {
      redirect: {
        destination: '/admin',
        permanent: false,
      },
    }
  }
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  }
}
