import React from 'react';
import { ThemeProvider } from 'styled-components';
import light from '../src/styles/theme/light';

export function wrapRootElement({ element, props }) {
  return (
    <ThemeProvider theme={light} {...props}>
      {element}
    </ThemeProvider>
  );
}
