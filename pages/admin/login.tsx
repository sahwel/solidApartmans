import React, { memo } from 'react'
import { Button } from '../../components/Button'

const login = memo(function Login() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className=" w-[30rem]  rounded-2xl border-2 border-main-blue p-8 shadow-2xl">
        <h1 className="mb-5 text-2xl font-bold">Bejelentkezés</h1>
        <form className="grid gap-y-2">
          <div className="grid">
            <label htmlFor="login-email" className="pl-2 text-sm">
              Email
            </label>
            <input
              type="text"
              id="login-email"
              placeholder="john.doe@gmail.com"
              className="rounded-xl border-[1px] border-main-blue px-4 py-1"
            />
          </div>
          <div className="grid">
            <label htmlFor="login-password" className="pl-2 text-sm">
              Password
            </label>
            <input
              type="password"
              id="login-password"
              placeholder="***********"
              className="rounded-xl border-[1px] border-main-blue px-4 py-1"
            />
          </div>
          <Button title="Bejelentkezés" classNames="!mt-5 w-1/2 py-2 " />
        </form>
      </div>
    </div>
  )
})

export default login
