import { Link } from 'gatsby';
import React, { ReactNode } from 'react';

type LayoutProps =  {
    pageTitle: string;
    children: ReactNode;
}

export function Layout({ pageTitle, children }: LayoutProps) {
  return (
    <div>
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
  </div>
  );
}
