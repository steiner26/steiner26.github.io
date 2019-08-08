require("dotenv").config() //if environment vars are needed

module.exports = {
  siteMetadata: {
    title: `Brandon Stein`,
    titleTemplate: `%s | Brandon Stein`,
    description: `//TODO`,
    author: `Brandon Stein`,
    siteUrl: `https://steiner26.github.io`,
    image: `/social-share.jpg`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: "https://steiner26.github.io",
        sitemap: "https://steiner26.github.io/sitemap.xml",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects`,
      },
    },
    `gatsby-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Brandon Stein`,
        short_name: `brandon`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
