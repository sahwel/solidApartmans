import { FunctionComponent, memo } from 'react'
import cl from 'classnames'
interface AdminFilterInputProps {
  label: string
  labeFor: string
  classNames?: string
  error?: string
}

const AdminInput: FunctionComponent<AdminFilterInputProps> = memo(
  function AdminInput({ label, labeFor, classNames, children, error }) {
    return (
      <div className={cl('grid w-full', classNames)}>
        <label htmlFor={labeFor} className="ml-1 text-sm">
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
    oldProps.classNames === newProps.classNames &&
    oldProps.label === newProps.label
)

export default AdminInput
