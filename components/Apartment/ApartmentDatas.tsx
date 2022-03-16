import { StarIcon } from '@heroicons/react/solid'

const ApartmentDatas = () => {
  return (
    <div className="w-full bg-white p-3 lg:pt-0">
      <div className="flex justify-between">
        <p className="text-lg font-bold">1061 Budapest, Kossuth utca 64/b</p>
        <p className="flex items-center md:hidden ">
          <span>4</span>
          <StarIcon className="h-5 w-5" />
        </p>
      </div>
      <div className="lg:text-md mt-3 flex justify-between text-sm lg:mt-1 lg:block">
        <p className="">B apartman</p>
        <p>min. 13000 Ft</p>
      </div>
    </div>
  )
}

export default ApartmentDatas
