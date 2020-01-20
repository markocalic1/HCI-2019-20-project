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
			resolve: 'gatsby-plugin-snipcart',
			options: {
        apiKey: process.env.SNIPCART_API_KEY,
        autopop:true
			}
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
        plugins: [
          
        ],
      },
    },

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "P1N4k32NqVANY9Y5B4TIAV_hyDh7l16esTKPD2ATazU",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
      
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "eagrar.netlify.com",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
