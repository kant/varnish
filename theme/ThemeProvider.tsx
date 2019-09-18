import React from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

import { DefaultVarnishTheme } from './DefaultVarnishTheme';

export const ThemeProvider = (props: { theme?: typeof DefaultVarnishTheme, children: React.ReactNode | React.ReactNodeArray }) => {
  const vTheme = props.theme || DefaultVarnishTheme;

  return (
      <SCThemeProvider theme={vTheme}>
        <React.Fragment>
          {props.children}
        </React.Fragment>
      </SCThemeProvider>
  );
}
