import React from 'react'
import PropTypes from 'prop-types'
import Document, { Head, Main, NextScript } from 'next/document'

const defaultDescription = ''
const defaultIndexAndFollow = 'index, follow'
const defaultImage = ''
const defaultUrl = ''
const defaultSiteName = ''
const defaultImageAltText = ''

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
          <meta name="description" content={this.props.description || defaultDescription} />
          <meta name="robots" content={this.props.indexAndFollow || defaultIndexAndFollow} />

          <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
          <link rel="apple-touch-icon" href="/static/touch-icon.png" />
          <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
          <link rel="icon" href="/static/favicon.ico" />

          <meta property="og:title" content={this.props.title} />
          <meta property="og:description" content={this.props.description || defaultDescription} />
          <meta property="og:image" content={this.props.image || defaultImage} />
          <meta property="og:url" content={this.props.url || defaultUrl} />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content={this.props.url || defaultUrl} />

          <meta name="twitter:site" content={this.props.twitterUserName} />
          <meta property="fb:app_id" content={this.props.facebookAppId} />

          <meta property="og:site_name" content={this.props.siteName || defaultSiteName} />
          <meta name="twitter:image:alt" content={this.props.imageAltText || defaultImageAltText}></meta>
          {/* <!-- Google Tag Manager --> */}
          <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5VPQ5Q8');</script>
          {/* <!-- End Google Tag Manager --> */}
        </Head>
        <body>
          <Main />
          {/* <!-- Google Tag Manager (noscript) --> */}
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5VPQ5Q8"
          height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
          {/* <!-- End Google Tag Manager (noscript) --> */}
          <NextScript />
        </body>
      </html>
    )
  }
}

DefaultTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  twitterUserName: PropTypes.string,
  facebookAppId: PropTypes.string,
  siteName: PropTypes.string,
  imageAltText: PropTypes.string
}

export default DefaultTemplate
