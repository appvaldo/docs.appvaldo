import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Layout } from '../components/Layout';

export default function IndexPage() {
  return (
    <Layout pageTitle="Home Page">
      <StaticImage alt="fundo abstrato com design baixo" src="../images/abstract-background-with-low-poly-design.jpg" />
      <Link to="https://br.freepik.com/fotos-vetores-gratis/fundo">Fundo foto criado por kjpargeter - br.freepik.com</Link>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  );
}
// <a href=""></a>
