import React, { memo } from 'react'
import ContactContacts from '../components/Client/ContactUs/ContactContacts'
import ContactHeader from '../components/Client/ContactUs/ContactHeader'
import ContactUsForm from '../components/Client/ContactUs/ContactUsForm'
import Container from '../components/Container'

const contact = memo(function contact() {
  return (
    <Container>
      <ContactHeader />
      <ContactContacts />
      <ContactUsForm />
    </Container>
  )
})

export default contact
