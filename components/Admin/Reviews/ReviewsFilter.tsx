import React, { memo } from 'react'
import { Button } from '../../Button'
import AdminFilterInput from '../../Common/AdminInput'

const ReviewsFilter = memo(function ReviewsFilter() {
  return (
    <div className="w-1/3">
      <h1 className="text-2xl font-bold">Értékelések</h1>

      <form className="mt-5 grid w-[80%] gap-y-3">
        <AdminFilterInput
          labeFor="reviews-filter-free-text-search"
          label="Szabad szöveges kereső"
        >
          <input
            id="reviews-filter-free-text-search"
            type="text"
            placeholder="B apartman"
            className="rounded-lg border-2 border-main-blue py-1 px-3"
          />
        </AdminFilterInput>
        <AdminFilterInput
          labeFor="reviews-start-start"
          label="Csillagok számától"
        >
          <input
            id="reviews-start-start"
            type="number"
            min={1}
            max={5}
            placeholder="1"
            className="rounded-lg border-2 border-main-blue py-1 px-3"
          />
        </AdminFilterInput>
        <AdminFilterInput
          labeFor="reviews-starts-end"
          label="Csillagok számáig"
        >
          <input
            id="reviews-starts-end"
            type="number"
            min={1}
            max={5}
            placeholder="5"
            className="rounded-lg border-2 border-main-blue py-1 px-3"
          />
        </AdminFilterInput>
        <AdminFilterInput
          labeFor="reservation-filter-start-search"
          label="Létrehozástól"
        >
          <input
            id="reviews-filter-start-search"
            type="text"
            placeholder="2022-11-02"
            className="rounded-lg border-2 border-main-blue py-1 px-3"
          />
        </AdminFilterInput>
        <AdminFilterInput
          labeFor="reviews-filter-end-search"
          label="Létrehozásig"
        >
          <input
            id="reviews-filter-end-search"
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

export default ReviewsFilter
