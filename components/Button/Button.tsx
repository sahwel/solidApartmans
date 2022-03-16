import { FunctionComponent } from 'react'

interface ButtonProps {
  title: string
  onClick?: () => void
  classNames?: string
}

export const Button: FunctionComponent<ButtonProps> = ({
  title,
  onClick = () => ({}),
  classNames = '',
}) => {
  return (
    <button
      className={`rounded-xl bg-main-blue text-white ${classNames} border-2 border-main-blue font-bold hover:bg-white hover:text-main-text`}
      onClick={onClick}
    >
      {title}
    </button>
  )
}
