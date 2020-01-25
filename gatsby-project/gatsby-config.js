require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `eAgrar`,
    description: `New dimension of agriculture`,
    menuItems: [
      {
        text: "Home",
        path: "/",
      },
      {
        text: "Blog",
        path: "/blog",
      },
      {
        text: "Products",
        path: "/products",
      },
      {
        text: "Stations",
        path: "/stations",
      },
      {
        text: "Shop",
        path: "/shop",
      },
      {
        text: "Contact",
        path: "/contact",
      },
    ],
    author: `MC`,
  },
  plugins: [
    // {
    //   resolve: `gatsby-source-wordpress`,
    //   options: {
    //     /*
    //      * The base URL of the WordPress site without the trailingslash and the protocol. This is required.
    //      * Example : 'dev-gatbsyjswp.pantheonsite.io' or 'www.example-site.com'
    //      */
    //     baseUrl: `blog.eagrar.eu/`,
    //     protocol: `http`,
    //     hostingWPCOM: false,
    //     useACF: false,

    //   },
    // },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },

    "gatsby-plugin-theme-ui",
    `gatsby-plugin-react-helmet`,
    `gatsby-remark-smartypants`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-catch-links`,
      options: {
        excludePattern: /(excluded-link|external)/,
      },
    },

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },

    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md", ".markdown"],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 600,
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-smartypants`,
        ],
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 600,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
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
        name: `slideshow`,
        path: `${__dirname}/src/images/slideshow`,
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `eAgrar`,
        short_name: `eAgrar`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
