import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sterling Ranch food trucks</title>
        <meta name='description' content='Sterling Ranch food trucks' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='h-screen flex items-center justify-center'>
        <div>Hi.</div>
      </main>
    </>
  )
}

export default Home
