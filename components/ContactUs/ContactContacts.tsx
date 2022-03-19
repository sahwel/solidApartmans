import { memo } from 'react'
import { PhoneIcon, MapIcon } from '@heroicons/react/outline'
import ContactIcon from './ContactIcon'
import CustomImage from '../Image/CustomImage'

const ContactContacts = memo(function ContactContacts() {
  return (
    <div className="!mt-20 grid w-full  justify-center space-y-8">
      <ContactIcon title="+36701234567">
        <PhoneIcon className="h-7 w-7 font-light text-white" />
      </ContactIcon>
      <div className="grid justify-items-center">
        <CustomImage
          classNames="w-11 h-11"
          url="/mail.svg"
          alt="Icon of mail"
          imageClassName="w-7 h-7"
        />
        <p className="text-sm">contact@solidApartmans.hu</p>
      </div>
      <div className="grid justify-items-center">
        <CustomImage
          classNames="w-9 h-9"
          url="/facebook.svg"
          alt="Icon of facebook"
          imageClassName="w-7 h-7"
        />
        <p className="text-sm">/solidApartmans</p>
      </div>
      <ContactIcon title="1061, Budapest Kossuth utca 64/b">
        <MapIcon className="h-7 w-7 font-light text-white" />
      </ContactIcon>
    </div>
  )
})

export default ContactContacts
