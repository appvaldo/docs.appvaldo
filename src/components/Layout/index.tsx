import { Link } from 'gatsby';
import React, { ReactNode } from 'react';
import { createGlobalStyle } from "styled-components";
import { Container } from './styles';


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
