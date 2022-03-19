import React from 'react';
import { Layout } from '../../components/Layout';
import { Container } from './styles';


export default function About() {
  return (
    <Container>
      <Layout pageTitle="About Me">
        <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      </Layout>
    </Container>
  );
}
