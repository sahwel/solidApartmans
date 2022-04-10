import { memo } from 'react'
import { Button } from '../../Button'
import AdminFilterInput from '../../Common/AdminInput'

const ReservationsFilter = memo(function ReservationsFilter() {
  return (
    <div className="w-1/3">
      <h1 className="text-2xl font-bold">Foglalások</h1>

      <form className="mt-5 grid w-[80%] gap-y-3">
        <AdminFilterInput
          labeFor="reservation-filter-free-text-search"
          label="Szabad szöveges kereső"
        >
          <input
            id="reservation-filter-free-text-search"
            type="text"
            placeholder="B apartman"
            className="rounded-lg border-2 border-main-blue py-1 px-3"
          />
        </AdminFilterInput>
        <AdminFilterInput
          labeFor="reservation-filter-start-search"
          label="Foglalás kezdete"
        >
          <input
            id="reservation-filter-start-search"
            type="text"
            placeholder="2022-11-02"
            className="rounded-lg border-2 border-main-blue py-1 px-3"
          />
        </AdminFilterInput>
        <AdminFilterInput
          labeFor="reservation-filter-end-search"
          label="Foglalás vége"
        >
          <input
            id="reservation-filter-end-search"
            type="text"
            placeholder="2022-11-12"
            className="rounded-lg border-2 border-main-blue py-1 px-3"
          />
        </AdminFilterInput>
        <Button title="Keres" className="w-1/3 py-1" />
      </form>
    </div>
  )
})

export default ReservationsFilter
