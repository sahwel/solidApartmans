import { FunctionComponent, memo } from 'react'
import cl from 'classnames'

interface ButtonProps {
  title: string
  onClick?: () => void
  classNames?: string
}

export const Button: FunctionComponent<ButtonProps> = memo(
  function Button({ title, onClick = () => ({}), classNames = '' }) {
    return (
      <button
        className={cl(
          'cursor-pointer rounded-xl border-2 border-main-blue bg-main-blue font-bold text-white hover:bg-white hover:text-main-text',
          classNames
        )}
        onClick={onClick}
      >
        {title}
      </button>
    )
  },
  (oldProps: ButtonProps, newProps: ButtonProps) =>
    oldProps.classNames === newProps.classNames &&
    oldProps.title === newProps.title
)
