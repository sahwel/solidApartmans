import { FunctionComponent, memo } from 'react'
import Asset from './Asset'
import cl from 'classnames'

interface AssetsProps {
  isCreate: boolean
}

const Assets: FunctionComponent<AssetsProps> = memo(
  function Assets({ isCreate }) {
    return (
      <div
        className={cl(
          'h-[20rem] overflow-y-auto rounded-lg border-2 border-main-blue p-3',
          isCreate ? 'grid w-full grid-cols-2 gap-5' : 'w-1/2 space-y-3 '
        )}
      >
        <Asset />
        <Asset />
        <Asset />
        <Asset />
        <Asset />
        <Asset />
        <Asset />
        <Asset />
        <Asset />
        <Asset />
        <Asset />
        <Asset />
        <Asset />
        <Asset />
        <Asset />
        <Asset />
        <Asset />
        <Asset />
        <Asset />
        <Asset />
        <Asset />
        <Asset />
        <Asset />
        <Asset />
        <Asset />
        <Asset />
      </div>
    )
  },
  (oldProps, newProps) => oldProps.isCreate === newProps.isCreate
)

export default Assets
