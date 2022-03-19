import { FunctionComponent, memo } from 'react'

interface ContactIconProps {
  title: string
}

const ContactIcon: FunctionComponent<ContactIconProps> = memo(
  function ContactIcon({ children, title }) {
    return (
      <div className="grid place-items-center space-y-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-main-blue bg-main-blue">
          {children}
        </div>
        <p className="text-sm">{title}</p>
      </div>
    )
  },
  (oldProps, newProps) => oldProps.title === newProps.title
)

export default ContactIcon
