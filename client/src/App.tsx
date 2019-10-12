import React, { Component } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { AppBar } from './components/AppBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Grommet } from 'grommet';
import { Home } from './screens/Home';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { client } from './lib/apollo';

export const App = () => (
  <ApolloProvider client={client}>
    <div style={{ height: '100%' }}>
      <Grommet>
        <ThemeProvider theme={theme}>
          <Router>
            <AppBar />
            <Route exact path="/" component={Home} />
          </Router>
        </ThemeProvider>
      </Grommet>
    </div>
  </ApolloProvider>
);

export default App;
