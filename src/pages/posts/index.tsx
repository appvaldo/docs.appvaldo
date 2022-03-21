import { graphql, Link, PageProps } from 'gatsby';
import React from 'react';
import { Layout } from '../../components/Layout';

type DataProps = {
  allMdx: {
    nodes: {
      slug: string;
      frontmatter: {
        date: string;
        title: string;
      };
      id: string;
      parent: {
        modifiedTime: string;
      };
    }[];
  };
};

export default function Posts({ data }: PageProps<DataProps>) {
  return (
    <Layout pageTitle="Linux">
      <h1>Diretórios</h1>
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          <h2>
            <Link to={`/posts/${node.slug}`}>{node.frontmatter.title}</Link>
          </h2>
          <p>Posted: {node.frontmatter.date}</p>
          {/* <MDXRenderer>{node.body}</MDXRenderer> */}
        </article>
      ))}
    </Layout>
  );
}

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        slug
        frontmatter {
          date(formatString: "D MMMM YYYY")
          title
        }
        id
        parent {
          ... on File {
            modifiedTime(formatString: "MMMM D, YYYY")
          }
        }
      }
    }
  }
`;
