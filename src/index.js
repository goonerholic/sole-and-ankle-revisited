import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import GlobalStyles from './components/GlobalStyles';

import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './themes';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);
