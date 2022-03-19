/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: 'DocsTecno',
    siteUrl: `https://docs.appvaldo.com`,
    description: 'Anotações sobre tecnologias',
    social: [
      {
        name: 'github',
        url: 'https://github.com/appvaldo/docs.appvaldo'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      }
    },
  ],
  // pathPrefix: '/blog' 
}
