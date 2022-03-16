import Image from 'next/image'

const ApartmentFacilities = () => {
  return (
    <div className="bg-white p-3  lg:w-1/2">
      <h1 className="text-lg font-bold lg:hidden">Facilities</h1>
      <div className="m-auto mt-4 flex max-w-[90vw] space-x-5 overflow-x-auto lg:grid lg:max-h-full lg:justify-start lg:space-x-0 lg:space-y-4 lg:overflow-y-auto lg:overflow-x-hidden">
        {[
          '/wifi-inner.svg',
          '/ac-inner.svg',
          '/cook-inner.svg',
          '/parking-inner.svg',
          '/wifi-inner.svg',
          '/ac-inner.svg',
          '/cook-inner.svg',
          '/parking-inner.svg',
          '/wifi-inner.svg',
          '/ac-inner.svg',
          '/cook-inner.svg',
          '/parking-inner.svg',
          '/wifi-inner.svg',
          '/ac-inner.svg',
          '/cook-inner.svg',
          '/parking-inner.svg',
        ].map((e, i) => (
          <div
            className="grid w-[7rem] justify-between lg:flex lg:w-full lg:items-center lg:space-x-2"
            key={i}
          >
            <Image src={e} alt="icon" width={30} height={30} />
            <p className="mt-2  text-center lg:m-0">asdasda sasdas </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ApartmentFacilities
