require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: `Sebastian Goscik's Blog`,
    siteTitleAlt: ``,
    siteUrl: `https://goscik.com`,
    author: `@ep1cman`,
    siteImage: `/banner.jpg`,
    siteLanguage: `en`,
    siteDescription: `My personal blog to share projects, how-tos and other musings with the world.`,
    siteHeadline: `Seb's personal blog`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
          {
            title: `Contact`,
            slug: `/contact`,
          },
        ],
        externalLinks: [
          {
            name: `GitHub`,
            url: `https://github.com/ep1cman`,
          },
        ],
      },
    },

    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
