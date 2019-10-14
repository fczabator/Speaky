import React, { Component } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { AppLayout } from './components/AppLayout';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Grommet } from 'grommet';
import { Home } from './screens/Home';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { client } from './lib/apollo';
import { AddWord } from './screens/AddWord';

export const App = () => (
  <ApolloProvider client={client}>
    <div style={{ height: '100%' }}>
      <Grommet>
        <ThemeProvider theme={theme}>
          <Router>
            <AppLayout>
              <Route exact path="/" component={Home} />
              <Route path="/add-word" component={AddWord} />
            </AppLayout>
          </Router>
        </ThemeProvider>
      </Grommet>
    </div>
  </ApolloProvider>
);

export default App;
