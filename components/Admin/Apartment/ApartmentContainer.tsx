import { Button } from '../../Button'
import Assets from './Assets/Assets'
import Calendar from './Calendar'
import Datas from './Datas'
import Images from './Images/Images'

const ApartmentContainer = () => {
  return (
    <div className="p-10">
      <div className="mb-4 flex w-full justify-end space-x-4">
        <Button
          title="Törlés"
          classNames="py-1 px-10 !bg-white !text-main-text hover:!bg-main-blue hover:!text-white"
        />
        <Button title="Mentés" classNames="py-1 px-10" />
      </div>
      <div className="flex w-full space-x-6">
        <div className="w-[40%]">
          <Images />
          <div className="mt-5 flex space-x-3">
            <Assets />
            <Calendar />
          </div>
        </div>
        <Datas />
      </div>
    </div>
  )
}

export default ApartmentContainer
