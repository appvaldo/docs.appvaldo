import React from 'react';
import styled from 'styled-components';
import { Layout } from '../components/Layout';

export const Container = styled.div`
  flex: 1;
`;

export default function About() {
  return (
    <Container>
      <Layout pageTitle="About Me">
        <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      </Layout>
    </Container>
  );
}
