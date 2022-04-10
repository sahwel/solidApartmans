import { useState, useCallback, FunctionComponent, memo } from 'react'
import { useTranslation } from 'react-i18next'

interface ApartmentDeatilsProps {
  details: string
}

const ApartmentDeatils: FunctionComponent<ApartmentDeatilsProps> = memo(
  function ApartmentDeatils({ details }) {
    const show = useCallback(() => {
      setIsShow((oldState) => !oldState)
    }, [])

    const { t } = useTranslation('Apartment')
    const [isShow, setIsShow] = useState(false)
    return (
      <div className=" bg-white p-3  lg:m-0 lg:h-[75%] lg:w-full lg:pb-0  xl:h-[80%]">
        <h1 className="overflow-y-auto text-lg font-bold lg:hidden">
          {t('details')}
        </h1>
        <p
          className={`lg:h-full ${
            isShow ? 'max-h-full' : 'max-h-[20rem]'
          } overflow-y-hidden text-justify text-sm lg:m-0 lg:max-h-full  lg:overflow-y-auto  lg:pr-4`}
        >
          {details}
        </p>
        <p
          className="ml-3 cursor-pointer text-sm underline lg:hidden"
          onClick={show}
        >
          {isShow ? 'Less' : 'Show more'}
        </p>
      </div>
    )
  },
  (oldProps, newProps) => oldProps.details === newProps.details
)

export default ApartmentDeatils
