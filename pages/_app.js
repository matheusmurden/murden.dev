import 'styles/globals.scss'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
