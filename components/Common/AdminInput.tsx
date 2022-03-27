import { FunctionComponent, memo } from 'react'

interface AdminInputProps {
  label: string
  labeFor: string
}

const AdminInput: FunctionComponent<AdminInputProps> = memo(
  function AdminInput({ label, labeFor, children }) {
    return (
      <div className="grid w-full">
        <label htmlFor={labeFor} className="text-sm">
          {label}
        </label>
        {children}
      </div>
    )
  },
  (oldProps, newProps) =>
    oldProps.children === newProps.children &&
    oldProps.labeFor === newProps.labeFor &&
    oldProps.label === newProps.label
)

export default AdminInput
