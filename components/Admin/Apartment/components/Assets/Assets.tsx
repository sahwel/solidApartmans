import { FunctionComponent, memo } from 'react'
import Asset from './Asset'
import cl from 'classnames'
import { Facility } from '../../../../../services/apartmentDefinitions'

interface AssetsProps {
  isCreate: boolean
  facilites: Facility[]
}

const Assets: FunctionComponent<AssetsProps> = memo(
  function Assets({ isCreate, facilites }) {
    return (
      <div
        className={cl(
          'h-[20rem] items-start overflow-y-auto rounded-lg border-2 border-main-blue p-3',
          isCreate ? 'grid w-full grid-cols-2 gap-5' : 'w-1/2 space-y-3 '
        )}
      >
        {facilites.map((e) => (
          <Asset key={e.nameEN} {...e} />
        ))}
      </div>
    )
  },
  (oldProps, newProps) => oldProps.isCreate === newProps.isCreate
)

export default Assets
