const config = require('./data/Siteconfig')

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    author: config.author,
    description: config.description,
    copyright: config.copyright,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.googleAnalyticsID,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
