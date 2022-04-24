import React, { memo } from 'react'
import Container from '../components/Container'
import dynamic from 'next/dynamic'

const ContactUsForm = dynamic(
  () => import('../components/Client/ContactUs/ContactUsForm'),
  {
    ssr: false,
  }
)

const ContactHeader = dynamic(
  () => import('../components/Client/ContactUs/ContactHeader'),
  {
    ssr: false,
  }
)

const ContactContacts = dynamic(
  () => import('../components/Client/ContactUs/ContactContacts'),
  {
    ssr: false,
  }
)
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
