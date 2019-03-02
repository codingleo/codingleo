import React from 'react'
import PropTypes from 'prop-types'
import NextHead from 'next/head'
import { Main, NextScript } from 'next/document'

const defaultDescription = ''
const defaultIndexAndFollow = 'index, follow'
const defaultImage = ''
const defaultUrl = ''
const defaultSiteName = ''
const defaultImageAltText = ''

class DefaultTemplate extends React.Component {
  render () {
    return (
      <html>
        <NextHead>
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

          <title>{this.props.title}</title>
        </NextHead>
        <body>
          <Main />
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
