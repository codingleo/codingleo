import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

class DefaultTemplate extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <html>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        </Head>
        <body>
          <noscript dangerouslySetInnerHTML={{ __html: "<iframe src=\"https://www.googletagmanager.com/ns.html?id=GTM-5VPQ5Q8\" width=\"0\" height=\"0\" style=\"display: 'none'; visibility: 'hidden';\" />" }}></noscript>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default DefaultTemplate
