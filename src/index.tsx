import React from 'react';
import ReactDOM from 'react-dom/client';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import './index.css';
import App from './components/App';

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
);
