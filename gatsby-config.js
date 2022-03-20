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
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ["develop"],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
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
    "gatsby-plugin-mdx",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              linkImagesToOriginal: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
              escapeEntities: {},
            },
          },
        ],
      },
    },
  ],
  // pathPrefix: '/blog'
}
