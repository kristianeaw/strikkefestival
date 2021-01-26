import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html lang="no">
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta property="og:url" content="https://tromsostrikkefestival.no/" />
          <meta property="og:title" content="Tromsø strikkefestival" />
          <meta property="og:description" content="Nordnorsk strikkelykke hos Tromsø strikkefestival" />
          <meta name="description" content="Nordnorsk strikkelykke hos Tromsø strikkefestival"/>
          <meta name="keywords" content="Tromsø, strikking, strikkefestival, nord-norge"/>
          <link rel="icon" href="/favicon.ico" />
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