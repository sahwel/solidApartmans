import { FunctionComponent, memo } from 'react'

interface ContactIconProps {
  title: string
}

const ContactIcon: FunctionComponent<ContactIconProps> = memo(
  function ContactIcon({ children, title }) {
    return (
      <div className="grid justify-items-center space-y-1">
        {children}
        <p className="text-sm">{title}</p>
      </div>
    )
  },
  (oldProps, newProps) =>
    oldProps.title === newProps.title && oldProps.children === newProps.children
)

export default ContactIcon
