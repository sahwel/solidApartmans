import { Button } from '../../components/Button'
import FaqCard from '../../components/Admin/Faq/FaqCard'

const faq = () => {
  return (
    <div className="mx-auto my-8 grid w-1/2 gap-y-6">
      <div className="!mb-7 flex w-full justify-between">
        <h1 className="text-2xl font-bold">GY.I.K</h1>
        <Button title="Létrehozás" classNames="py-1 px-4 " />
      </div>
      <div className="space-y-6">
        <FaqCard /> <FaqCard /> <FaqCard /> <FaqCard />
      </div>
    </div>
  )
}

export default faq
