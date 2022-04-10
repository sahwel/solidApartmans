import { FunctionComponent, memo } from 'react'
import cl from 'classnames'
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
        {error && <span className="text-sm text-red-600">{error}</span>}
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
