import { GetServerSideProps } from 'next'
import React, { FunctionComponent, memo } from 'react'
import FaqCard from '../components/Client/Faq/FaqCard'
import Container from '../components/Container'
import { axiosInstance } from '../services/axiosInstance'
import { Faq } from '../services/faqDefinitions'

interface faqProps {
  faqs: Faq[]
}

const faq: FunctionComponent<faqProps> = memo(
  function faq({ faqs }) {
    return (
      <Container>
        <div className="space-y-5 py-5  lg:space-y-1">
          <h1 className="w-full text-center text-2xl font-bold">FAQ</h1>
          {faqs.map((e, i) => (
            <FaqCard {...e} key={i} />
          ))}
        </div>
      </Container>
    )
  },
  (oldProps, newProps) =>
    oldProps.faqs.length === newProps.faqs.length
      ? oldProps.faqs.every((e, i) => e === newProps.faqs[i])
      : false
)

export default faq

export const getServerSideProps: GetServerSideProps = async () => {
  //todo get language
  const response = await axiosInstance.get('/faq')
  const faqs: Faq[] = response.data.faqs

  return {
    props: {
      faqs,
    },
  }
}
