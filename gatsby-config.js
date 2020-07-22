/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require('path')

module.exports ={
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        icon: `static/favicon.ico`,
        alias: {
          "@components": path.resolve(__dirname, 'src/components'),
          "@utils": path.resolve(__dirname, 'src/utils'),
          "@images": path.resolve(__dirname, 'static/images'),
          "@fonts": path.resolve(__dirname, 'static/fonts'),
        },
        extensions: []
      }
    }
  ]
}