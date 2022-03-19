import { graphql, PageProps } from 'gatsby';
import React from 'react';
import { Layout } from '../components/Layout';

type DataProps = {
  allFile: {
    nodes: {
      name: string;
    }[];
  };
};

export default function Linux({ data }: PageProps<DataProps>) {
  return (
    <Layout pageTitle="Linux">
      <h1>Diretórios</h1>
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
}

export const query = graphql`
  query {
    allFile(filter: { relativePath: { regex: "/linux/" } }) {
      nodes {
        name
      }
    }
  }
`;
