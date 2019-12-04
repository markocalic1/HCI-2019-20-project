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
        path: "/projekti",
      },
      {
        text: "Rezultati",
        path: "/rezultati",
      },
      {
        text: "Ocjenjivanje",
        path: "/ocjenjivanje",
      },
     
    ],
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
