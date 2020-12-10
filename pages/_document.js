import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name='application-name' content='Matheus Murden | Web Developer & Digital Creator' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <meta name='apple-mobile-web-app-title' content='Murden.DEV' />
          <meta name='description' content='Best PWA App in the world' />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='msapplication-config' content='/icons/browserconfig.xml' />
          <meta name='msapplication-TileColor' content='#{primaryCOlorHere}' />
          <meta name='msapplication-tap-highlight' content='no' />
          <meta name='theme-color' content='#{primaryCOlorHere}' />
                    
          <link rel='apple-touch-icon' sizes='180x180' href='/static/icons/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/icons/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/icons/favicon-16x16.png' />
          <link rel='manifest' href='/manifest.json' />
          <link rel='mask-icon' href='/static/icons/safari-pinned-tab.svg' color='#{primaryCOlorHere}' />
          <link rel='shortcut icon' href='/icons/favicon.ico' />
              
          <meta name='twitter:card' content='summary' />
          <meta name='twitter:url' content='https://murden.dev' />
          <meta name='twitter:title' content='Matheus Murden | Web Developer & Digital Creator' />
          <meta name='twitter:description' content='Best PWA App in the world' />
          <meta name='twitter:image' content='https://murden.dev/static/icons/android-chrome-192x192.png' />
          <meta name='twitter:creator' content='@matheusmurden' />
          <meta property='og:type' content='website' />
          <meta property='og:title' content='Matheus Murden | Web Developer & Digital Creator' />
          <meta property='og:description' content='Best PWA App in the world' />
          <meta property='og:site_name' content='Matheus Murden | Web Developer & Digital Creator' />
          <meta property='og:url' content='https://murden.dev' />
          <meta property='og:image' content='https://murden.dev/static/icons/apple-touch-icon.png' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument