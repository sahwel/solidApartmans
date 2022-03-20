import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../components/Layout/'
import Modal from '../components/Modal/ModalProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Modal>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Modal>
  )
}

export default MyApp
