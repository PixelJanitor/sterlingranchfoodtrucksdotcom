import { LazyMotion, domMax } from 'framer-motion'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LazyMotion features={domMax}>
      <Component {...pageProps} />
    </LazyMotion>
  )
}

export default MyApp
