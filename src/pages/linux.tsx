import { graphql, PageProps } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import { Layout } from '../components/Layout';

type DataProps = {
  allMdx: {
    nodes: {
      frontmatter: {
        date: string;
        title: string;
      };
      id: string;
      body: string;
      parent: {
        modifiedTime: string;
      };
    }[];
  };
};

export default function Linux({ data }: PageProps<DataProps>) {
  return (
    <Layout pageTitle="Linux">
      <h1>Diretórios</h1>
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          <p>Posted: {node.frontmatter.date}</p>
          <MDXRenderer>{node.body}</MDXRenderer>
        </article>
      ))}
    </Layout>
  );
}

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "D MMMM YYYY")
          title
        }
        id
        body
        parent {
          ... on File {
            modifiedTime(formatString: "MMMM D, YYYY")
          }
        }
      }
    }
  }
`;
