import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import { store } from '../src/app/store';
import theme from '../src/theme';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story, context) => {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <MemoryRouter
            initialEntries={context.parameters.initialEntries || ['/']}
          >
            {Story()}
          </MemoryRouter>
        </Provider>
      </ThemeProvider>
    );
  },
];
