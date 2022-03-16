import Image from 'next/image'
import { UserIcon } from '@heroicons/react/outline'

const HomeFacilites = () => {
  return (
    <div className=" hidden w-full justify-between md:grid md:grid-cols-3 lg:flex">
      <div className="col-start-1 col-end-3 flex  w-full justify-evenly lg:w-1/2">
        {['/wifi.svg', '/ac.svg', '/baby.svg', '/parking.svg', '/wifi.svg'].map(
          (e, i) => (
            <Image src={e} width={30} height={30} alt="icon" key={i} />
          )
        )}
      </div>
      <div className="flex  justify-evenly border-l-[1px] border-main-blue lg:w-1/2">
        <div className="grid">
          <p className="text-lg">Capacity</p>
          <p className="m-auto mt-4 flex">
            <span>4</span>
            <UserIcon className="h-6 w-6" />
          </p>
        </div>
        <div className="hidden lg:grid">
          <p className="text-lg">Bedrooms</p>
          <p className="m-auto mt-4 flex">
            <span>4</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={'/bed.svg'} className="h-6 w-6" alt="icon of a bed" />
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomeFacilites
