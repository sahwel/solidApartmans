import { FunctionComponent, memo } from 'react'

interface ButtonProps {
  title: string
  onClick?: () => void
  classNames?: string
}

export const Button: FunctionComponent<ButtonProps> = memo(
  function Button({ title, onClick = () => ({}), classNames = '' }) {
    return (
      <button
        className={`rounded-xl bg-main-blue text-white ${classNames} border-2 border-main-blue font-bold hover:bg-white hover:text-main-text`}
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
