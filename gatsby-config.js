const config = require('./data/Siteconfig')

module.exports = {
  siteMetadata: {
    siteUrl: config.siteUrl,
    title: config.siteTitle,
    author: config.author,
    description: config.description,
    copyright: config.copyright,
  },
  plugins: [
    'gatsby-plugin-react-helmet',

    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.googleAnalyticsID,
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: config.themeColor,
      },
    },

    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icon: `src/images/gatsby-icon.png`,
      },
    },
    'gatsby-plugin-sass',
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-offline',
  ],
}
