import React from 'react'

const Reservation = () => {
  return (
    <div className="mx-auto flex w-[90%] cursor-pointer items-center justify-between rounded-lg border-2 border-main-blue p-3 hover:shadow-lg">
      <h1>
        <span className="mr-2 text-lg font-medium">John doe</span>
        <span className="text-sm">(john.doe@gmail.com, +36701234567)</span>
      </h1>
      <p>2022.11.02 - 2022-11-16</p>
    </div>
  )
}

export default Reservation
