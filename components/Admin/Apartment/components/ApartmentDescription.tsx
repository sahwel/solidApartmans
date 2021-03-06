import { FunctionComponent, memo, useCallback, useState } from 'react'
import cl from 'classnames'
import { UseFormRegister } from 'react-hook-form'
import { AdminApartmentDefinitions } from '../../../../services/apartmentDefinitions'
import ErrorMsg from '../../../Common/ErrorMsg'

interface ApartmentDescriptionProps {
  isCreate: boolean
  register: UseFormRegister<AdminApartmentDefinitions>
  errorHU?: string
  errorEN?: string
}

const ApartmentDescription: FunctionComponent<ApartmentDescriptionProps> = memo(
  function ApartmentDescription({ isCreate, register, errorHU, errorEN }) {
    const [isHun, setIsHun] = useState(true)
    const handleChange = useCallback(
      (newState: boolean) => () => setIsHun(newState),
      []
    )
    return (
      <div>
        <div className="flex justify-between">
          <label
            htmlFor="apartment-edit-create-description"
            className={cl('ml-1', (errorHU || errorEN) && '!text-red-600')}
          >
            {isHun ? 'Leírás' : 'Description'}
          </label>
          <div className="mr-2">
            <span
              onClick={handleChange(true)}
              className={cl(
                'cursor-pointer border-r-[1px] border-main-blue pr-2',
                !isHun && 'opacity-50',
                errorHU && '!text-red-600'
              )}
            >
              hu
            </span>
            <span
              onClick={handleChange(false)}
              className={cl(
                'cursor-pointer border-l-[1px] border-main-blue pl-2',
                isHun && 'opacity-50',
                errorEN && '!text-red-600'
              )}
            >
              en
            </span>
          </div>
        </div>
        <div className={cl(!isCreate ? 'h-[20rem]' : 'h-[28.5rem]')}>
          <>
            <textarea
              {...register('detailsHU', {
                required: 'Ez a mező kötelező!',
              })}
              id="apartment-edit-create-description"
              className={cl(
                'w-full resize-none rounded-lg border-2 border-main-blue p-3',
                errorHU ? 'h-[23rem] !border-red-600 !text-red-600' : 'h-full ',
                isHun ? 'block' : 'hidden'
              )}
              placeholder="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos blanditiis ullam cupiditate eius recusandae Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos blanditiis ullam cupiditate eius recusand Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos blanditiis ullam cupiditate eius recusand Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos blanditiis ullam cupiditate eius recusand Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos blanditiis ullam cupiditate eius recusand Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos blanditiis ullam cupiditate eius recusand consectetur magnam ratione odit vel explicabo. Assumenda dignissimos ex possimus odio rem perferendis odit, libero officia. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos blanditiis ullam cupiditate eius recusandae consectetur magnam ratione odit vel explicabo. Assumenda dignissimos ex possimus odio rem perferendis odit, libero officia. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos blanditiis ullam cupiditate eius recusandae consectetur magnam ratione odit vel explicabo. Assumenda dignissimos ex possimus odio rem perferendis odit, libero officia."
            ></textarea>
            {isHun && <ErrorMsg message={errorHU} />}
          </>
          <>
            <textarea
              {...register('detailsEN', {
                required: 'Ez a mező kötelező!',
              })}
              id="apartment-edit-create-description"
              className={cl(
                'h-full w-full resize-none rounded-lg border-2 border-main-blue p-3',
                errorEN ? 'h-[23rem] !border-red-600 !text-red-600' : 'h-full ',
                !isHun ? 'block' : 'hidden'
              )}
              placeholder="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos blanditiis ullam cupiditate eius recusandae Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos blanditiis ullam cupiditate eius recusand Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos blanditiis ullam cupiditate eius recusand Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos blanditiis ullam cupiditate eius recusand Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos blanditiis ullam cupiditate eius recusand Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos blanditiis ullam cupiditate eius recusand consectetur magnam ratione odit vel explicabo. Assumenda dignissimos ex possimus odio rem perferendis odit, libero officia. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos blanditiis ullam cupiditate eius recusandae consectetur magnam ratione odit vel explicabo. Assumenda dignissimos ex possimus odio rem perferendis odit, libero officia. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos blanditiis ullam cupiditate eius recusandae consectetur magnam ratione odit vel explicabo. Assumenda dignissimos ex possimus odio rem perferendis odit, libero officia."
            ></textarea>
            {!isHun && <ErrorMsg message={errorEN} />}
          </>
        </div>
      </div>
    )
  },
  (oldProps, newProps) =>
    oldProps.isCreate === newProps.isCreate &&
    oldProps.errorEN === newProps.errorEN &&
    oldProps.errorHU === newProps.errorHU &&
    oldProps.register === newProps.register
)

export default ApartmentDescription
