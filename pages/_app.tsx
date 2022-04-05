import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../components/Layout/'
import Modal from '../components/Modal/ModalProvider'
import { SessionProvider } from 'next-auth/react'
import Toast from '../components/Common/Toast/Toast'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Toast>
        <Modal>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Modal>
      </Toast>
    </SessionProvider>
  )
}

export default MyApp
