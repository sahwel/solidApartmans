import React from 'react'

const login = () => {
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

          <input
            type="submit"
            value="Bejelentkezés"
            className="!mt-5 w-1/2 cursor-pointer rounded-xl border-2 border-main-blue bg-main-blue py-2 font-bold text-white hover:bg-white hover:text-main-text"
          />
        </form>
      </div>
    </div>
  )
}

export default login
