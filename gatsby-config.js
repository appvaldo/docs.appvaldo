/** @type {import('gatsby').GatsbyConfig} */
const path = require('path');

const gatsbyRequiredRules = path.join(process.cwd(), 'node_modules', 'gatsby', 'dist', 'utils', 'eslint-rules');

module.exports = {
  siteMetadata: {
    title: 'DocsTecno',
    siteUrl: `https://docs.appvaldo.com`,
    description: 'Anotações sobre tecnologias',
    social: [
      {
        name: 'github',
        url: 'https://github.com/appvaldo/docs.appvaldo',
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        rulePaths: [gatsbyRequiredRules],
        extensions: ['js', 'jsx', 'ts', 'tsx'],
        exclude: ['node_modules', 'bower_components', '.cache', 'public'],
        stages: ['develop'],
      },
    },
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-image',
    `gatsby-transformer-sharp`,
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    'gatsby-plugin-mdx',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-prismjs`],
      },
    },
  ],

  // pathPrefix: '/blog'
};
