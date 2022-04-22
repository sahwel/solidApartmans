import { FunctionComponent, memo } from 'react'
import cl from 'classnames'
import { ButtonTypes } from '../../services/commonDefinitions'

interface ButtonProps {
  title: string
  onClick?: () => void
  className?: string
  type?: ButtonTypes
}

export const Button: FunctionComponent<ButtonProps> = memo(
  function Button({
    title,
    onClick = () => ({}),
    className = '',
    type = 'button',
  }) {
    return (
      <button
        type={type}
        className={cl(
          'cursor-pointer rounded-xl border-2 border-main-blue bg-main-blue font-bold text-white hover:bg-white hover:text-main-text',
          className
        )}
        onClick={onClick}
      >
        {title}
      </button>
    )
  },
  (oldProps: ButtonProps, newProps: ButtonProps) =>
    oldProps.className === newProps.className &&
    oldProps.onClick === newProps.onClick &&
    oldProps.type === newProps.type &&
    oldProps.title === newProps.title
)
