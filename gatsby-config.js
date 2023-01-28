module.exports = {
  siteMetadata: {
    title: `Rizal Heritage Center`,
    description: `A website for the Rizal Community Center located in Chicago.`,
    author: `@dylmwrig`,
  },
  plugins: [
    {resolve: "gatsby-plugin-parse-rss",
     options: {
        // : translates to _ when converted to a graphQL property
        // > becomes ___
        rss: [
        {
          urlToFetch: "https://www.youtube.com/feeds/videos.xml?channel_id=UChqlNb3LpXclrYsIXzD2q_w",
          selectors: ["media:title", "media:thumbnail", "entry > link"],
          name: "youTubeRSS" 
        },
        {
          urlToFetch: "https://www.inquirer.net/fullfeed",
          //selectors: ["title", "item > title", "item > link"],
          selectors: ["title", "guid"],
          name: "inqRSS"
        }]
      }},
    `gatsby-plugin-image`,
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
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          precision: 6,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-bootstrap-5`,
        short_name: `gb5-starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/old-logo.png`
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Playfair Display`,
            file: `https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap`,
          },
          {
            name: `Open Sans`,
            file: `https://fonts.googleapis.com/css2?family=Open+Sans&display=swap`,
          },
        ],
      },
    },
    `gatsby-plugin-gatsby-cloud`,
  ],
}
