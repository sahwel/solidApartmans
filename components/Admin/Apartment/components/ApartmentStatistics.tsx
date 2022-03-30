import React, { FunctionComponent, memo } from 'react'

interface ApartmentStatisticsProps {
  views?: number
  reservations?: number
}

const ApartmentStatistics: FunctionComponent<ApartmentStatisticsProps> = memo(
  function ApartmentStatistics({ views = 0, reservations = 0 }) {
    return (
      <div className="flex w-full text-lg font-medium">
        <div className="gird w-full justify-center border-r-2 border-main-blue py-3">
          <p className="border-b-2 border-main-blue px-3 text-center">
            Megtekintések száma
          </p>
          <p className="flex w-full items-center justify-center p-3">{views}</p>
        </div>
        <div className="gird w-full justify-center py-3 text-center">
          <p className="border-b-2 border-main-blue px-3">Foglások száma</p>
          <p className="flex w-full items-center justify-center p-3">
            {reservations}
          </p>
        </div>
      </div>
    )
  },
  (oldProps, newProps) =>
    oldProps.reservations === newProps.reservations &&
    oldProps.views === newProps.views
)

export default ApartmentStatistics
