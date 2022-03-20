import { graphql, Link, useStaticQuery } from 'gatsby';
import React, { ReactNode } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const Container = styled.div`
  flex: 1;
`;

const ListLink = styled.ul`
  list-style: none;
  li {
    display: inline;
    a {
      padding: 2px 10px;
      display: inline-block;

      /* visual do link */
      background-color: #ededed;
      color: #333;
      text-decoration: none;
      border-bottom: 3px solid #ededed;
    }
    a:hover {
      background-color: #d6d6d6;
      color: #6d6d6d;
      border-bottom: 3px solid #ea0000;
    }
  }
`;

const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => (props.theme === 'purple' ? 'purple' : 'white')};
    margin: 0;
    padding: 0;
  }
`;

type LayoutProps = {
  pageTitle: string;
  children: ReactNode;
};

export function Layout({ pageTitle, children }: LayoutProps) {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Container>
      <GlobalStyle theme="purple" />
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <nav>
        <ListLink>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/linux">Linux</Link>
          </li>
        </ListLink>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </Container>
  );
}
