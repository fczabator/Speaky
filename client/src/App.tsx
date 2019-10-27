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
import { Words } from './screens/Words';
import { CreateChat } from './screens/CreateChat';

export const App = () => (
  <ApolloProvider client={client}>
    <div style={{ height: '100vh', backgroundColor: '#D3D3D3' }}>
      <Grommet>
        <ThemeProvider theme={theme}>
          <Router>
            <AppLayout>
              <Route exact path="/" component={Home} />
              <Route path="/add-word" component={AddWord} />
              <Route path="/words" component={Words} />
              <Route path="/create-chat" component={CreateChat} />
            </AppLayout>
          </Router>
        </ThemeProvider>
      </Grommet>
    </div>
  </ApolloProvider>
);

export default App;
