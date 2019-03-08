import React from 'react'
import PropTypes from 'prop-types'

const defaultDescription = "I'm Leonardo Ribeiro, a software developer focused on building web based applications with #javascript"
const defaultIndexAndFollow = 'index, follow'
const defaultImage = ''
const defaultUrl = ''
const defaultSiteName = 'leoribeiro.dev'
const defaultImageAltText = ''

const MyHead = (props) => {
  return (
    <React.Fragment>
      <meta name="description" content={props.description || defaultDescription} />
      <meta name="robots" content={props.indexAndFollow || defaultIndexAndFollow} />

      <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
      <link rel="apple-touch-icon" href="/static/touch-icon.png" />
      <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
      <link rel="icon" href="/static/favicon.ico" />

      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description || defaultDescription} />
      <meta property="og:image" content={props.image || defaultImage} />
      <meta property="og:url" content={props.url || defaultUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={props.url || defaultUrl} />

      <meta name="twitter:site" content={props.twitterUserName} />
      <meta property="fb:app_id" content={props.facebookAppId} />

      <meta property="og:site_name" content={props.siteName || defaultSiteName} />
      <meta name="twitter:image:alt" content={props.imageAltText || defaultImageAltText}></meta>
      {/* <!-- Google Tag Manager --> */}
      <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5VPQ5Q8');` }}></script>
      {/* <!-- End Google Tag Manager --> */}
    </React.Fragment>
  )
}

MyHead.PropTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  twitterUserName: PropTypes.string,
  facebookAppId: PropTypes.string,
  siteName: PropTypes.string,
  imageAltText: PropTypes.string
}

export default MyHead
