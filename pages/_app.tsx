import { LazyMotion, domMax } from 'framer-motion'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LazyMotion features={domMax}>
      <Component {...pageProps} />
      <Analytics />
    </LazyMotion>
  )
}

export default MyApp
