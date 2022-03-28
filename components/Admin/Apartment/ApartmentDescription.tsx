import { FunctionComponent, memo, useCallback, useState } from 'react'
import cl from 'classnames'

interface ApartmentDescriptionProps {
  isCreate: boolean
}

const ApartmentDescription: FunctionComponent<ApartmentDescriptionProps> = memo(
  function ApartmentDescription({ isCreate }) {
    const [isHun, setIsHun] = useState(true)
    const handleChange = useCallback(
      (newState: boolean) => () => setIsHun(newState),
      []
    )
    return (
      <div>
        <div className="flex justify-between">
          <label
            htmlFor="apartment-edit-create-description-hu"
            className="ml-1"
          >
            {isHun ? 'Leírás' : 'Description'}
          </label>
          <div className="mr-2">
            <span
              onClick={handleChange(true)}
              className={cl(
                'cursor-pointer border-r-[1px] border-main-blue pr-2',
                !isHun && 'opacity-50'
              )}
            >
              hu
            </span>
            <span
              onClick={handleChange(false)}
              className={cl(
                'cursor-pointer border-l-[1px] border-main-blue pl-2',
                isHun && 'opacity-50'
              )}
            >
              en
            </span>
          </div>
        </div>
        <textarea
          id="apartment-edit-create-description-hu"
          className={cl(
            ' w-full resize-none rounded-lg border-2 border-main-blue p-3',
            !isCreate ? 'h-[20rem]' : 'h-[28.5rem]'
          )}
          placeholder="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos blanditiis ullam cupiditate eius recusandae Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos blanditiis ullam cupiditate eius recusand Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos blanditiis ullam cupiditate eius recusand Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos blanditiis ullam cupiditate eius recusand Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos blanditiis ullam cupiditate eius recusand Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos blanditiis ullam cupiditate eius recusand consectetur magnam ratione odit vel explicabo. Assumenda dignissimos ex possimus odio rem perferendis odit, libero officia. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos blanditiis ullam cupiditate eius recusandae consectetur magnam ratione odit vel explicabo. Assumenda dignissimos ex possimus odio rem perferendis odit, libero officia. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos blanditiis ullam cupiditate eius recusandae consectetur magnam ratione odit vel explicabo. Assumenda dignissimos ex possimus odio rem perferendis odit, libero officia."
        ></textarea>
      </div>
    )
  },
  (oldProps, newProps) => oldProps.isCreate === newProps.isCreate
)

export default ApartmentDescription
