import 'styles/resets.css'
import 'styles/variables.css'
import 'styles/typography.css'

import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
        <title>Matheus Murden | Web Developer & Digital Creator</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
