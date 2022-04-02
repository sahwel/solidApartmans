import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../components/Layout/'
import Modal from '../components/Modal/ModalProvider'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Modal>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Modal>
    </SessionProvider>
  )
}

export default MyApp
