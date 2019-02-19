const withStylus = require('@zeit/next-stylus')
const rupture = require('rupture')
const koutoSwiss = require('kouto-swiss')

module.exports = withStylus({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]'
  },
  stylusLoaderOptions: {
    use: [koutoSwiss(), rupture()]
  },
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  }
})
