import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { store } from '../src/app/store';

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
      <Provider store={store}>
        <MemoryRouter
          initialEntries={context.parameters.initialEntries || ['/']}
        >
          {Story()}
        </MemoryRouter>
      </Provider>
    );
  },
];
