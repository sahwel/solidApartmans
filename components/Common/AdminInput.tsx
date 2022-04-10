import { FunctionComponent, memo } from 'react'
import cl from 'classnames'
import ErrorMsg from './ErrorMsg'
interface AdminFilterInputProps {
  label: string
  labeFor: string
  className?: string
  error?: string
}

const AdminInput: FunctionComponent<AdminFilterInputProps> = memo(
  function AdminInput({ label, labeFor, className, children, error }) {
    return (
      <div className={cl('grid w-full', className)}>
        <label
          htmlFor={labeFor}
          className={cl('ml-1 text-sm', error && '!text-red-600')}
        >
          {label}
        </label>
        {children}
        <ErrorMsg message={error} />
      </div>
    )
  },
  (oldProps, newProps) =>
    oldProps.children === newProps.children &&
    oldProps.labeFor === newProps.labeFor &&
    oldProps.className === newProps.className &&
    oldProps.label === newProps.label
)

export default AdminInput
