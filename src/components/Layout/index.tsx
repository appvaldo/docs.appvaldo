import { Link } from 'gatsby';
import React, { ReactNode } from 'react';
import styled, { createGlobalStyle } from "styled-components";


export const Container = styled.div`
  flex: 1;
`;

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.theme === "purple" ? "purple" : "white")};
  }
`

type LayoutProps =  {
    pageTitle: string;
    children: ReactNode;
}

export function Layout({ pageTitle, children }: LayoutProps) {
  return (
    <Container>
        <GlobalStyle theme="purple" />
        <title>{pageTitle}</title>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        <main>
            <h1>{pageTitle}</h1>
            {children}
        </main>
    </Container>
  );
}
