require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Grounded IT Solutions LLC`,
    description: `IT, pragmatically.`,
    author: `@trycrmr`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-151183277-1`,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: "UA-151183277-1",
    //     // Defines where to place the tracking script - `true` in the head and `false` in the body
    //     head: true,
    //     // Setting this parameter is optional
    //     anonymize: true,
    //     // Setting this parameter is also optional
    //     respectDNT: true,
    //     // Avoids sending pageview hits from custom paths
    //     exclude: ["/preview/**", "/do-not-track/me/too/"],
    //     // Delays sending pageview hits on route update (in milliseconds)
    //     pageTransitionDelay: 0,
    //     // Enables Google Optimize using your container Id
    //     optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
    //     // Enables Google Optimize Experiment ID
    //     experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
    //     // Set Variation ID. 0 for original 1,2,3....
    //     variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
    //     // Any additional optional fields
    //     sampleRate: 5,
    //     siteSpeedSampleRate: 10,
    //     // cookieDomain: "groundedit.solutions",
    //   },
    // },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
        icon: `src/images/grit-logo/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-react-redux`,
      options: {
        // [required] - path to your createStore module
        pathToCreateStoreModule: './src/state/createStore',
        // [optional] - options passed to `serialize-javascript`
        // info: https://github.com/yahoo/serialize-javascript#options
        // will be merged with these defaults:
        serialize: {
          space: 0,
          isJSON: true,
          unsafe: false,
        }
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
