module.exports = {
  siteMetadata: {
    title: 'Messing about with Gatsby',
  },
  plugins: [
      'gatsby-plugin-react-helmet',
      `gatsby-plugin-sass`,
      `gatsby-plugin-twitter`,
      {
          resolve: 'gatsby-source-filesystem',
          options: {
              path: `${__dirname}/src/pages`,
              name: 'pages',
          }
      },
      'gatsby-transformer-remark'
  ],
}
