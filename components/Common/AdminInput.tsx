import { FunctionComponent, memo } from 'react'
import cl from 'classnames'
interface AdminFilterInputProps {
  label: string
  labeFor: string
  classNames?: string
}

const AdminInput: FunctionComponent<AdminFilterInputProps> = memo(
  function AdminInput({ label, labeFor, classNames, children }) {
    return (
      <div className={cl('grid w-full', classNames)}>
        <label htmlFor={labeFor} className="ml-1 text-sm">
          {label}
        </label>
        {children}
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
