import React, { memo } from 'react'
import ContactContacts from '../components/ContactUs/ContactContacts'
import ContactHeader from '../components/ContactUs/ContactHeader'
import ContactUsForm from '../components/ContactUs/ContactUsForm'
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
