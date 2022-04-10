import { memo } from 'react'
import ContactIcon from './ContactIcon'
import CustomImage from '../../Image/CustomImage'

const ContactContacts = memo(function ContactContacts() {
  return (
    <div className="!mt-20 grid w-full  justify-center space-y-8 lg:!mt-4 lg:!mb-10 lg:flex lg:items-center lg:space-y-0 lg:space-x-5 ">
      <ContactIcon title="+36701234567">
        <CustomImage
          className="h-10 w-10"
          url="phone.svg"
          alt="Icon of phone"
          imageClassName="w-7 h-7"
        />
      </ContactIcon>
      <ContactIcon title="contact@solidApartmans.hu">
        <CustomImage
          className="h-10 w-10"
          url="mail.svg"
          alt="Icon of mail"
          imageClassName="w-7 h-7"
        />
      </ContactIcon>
      <ContactIcon title="/solidApartmans">
        <CustomImage
          className="h-10 w-10"
          url="facebook.svg"
          alt="Icon of facebook"
          imageClassName="w-7 h-7"
        />
      </ContactIcon>
      <ContactIcon title="1061, Budapest Kossuth utca 64/b">
        <CustomImage
          className="h-10 w-10"
          url="map.svg"
          alt="Icon of map"
          imageClassName="w-7 h-7"
        />
      </ContactIcon>
    </div>
  )
})

export default ContactContacts
