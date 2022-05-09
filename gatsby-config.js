module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.6ilberm.io',
    title: "6ilberm's"
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-mdx',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{ resolve: `gatsby-remark-prismjs`, options: {} }]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/'
      },
      __key: 'pages'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown',
        path: './src/markdown/'
      },
      __key: 'markdown'
    }
  ],
  // pathPrefix: '/6ilberM.github.io'
}
