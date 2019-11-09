import React from 'react';
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
import { SelectWords } from './screens/SelectWords';
import { CreateChat } from './screens/CreateChat';
import { AppBarProvider } from './context/appBarContext';
import { ChatView } from './screens/ChatView';
import { AppState, Auth0Provider } from './lib/auth';
import config from './lib/config.json';

const onRedirectCallback = (appState: AppState) => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

export const App = () => (
  <ApolloProvider client={client}>
    <div style={{ height: '100vh', backgroundColor: '#FAFAFA' }}>
      <Auth0Provider
        domain={config.domain}
        client_id={config.clientId}
        redirect_uri={window.location.origin}
        onRedirectCallback={onRedirectCallback}
        audience={config.audience}
      >
        <Grommet>
          <ThemeProvider theme={theme}>
            <AppBarProvider>
              <Router>
                <AppLayout>
                  <Route exact path="/" component={Home} />
                  <Route path="/add-word" component={AddWord} />
                  <Route path="/words" component={Words} />
                  <Route
                    path="/select-words/:chatId?"
                    component={SelectWords}
                  />
                  <Route path="/create-chat" component={CreateChat} />
                  <Route path="/chat/:_id" component={ChatView} />
                </AppLayout>
              </Router>
            </AppBarProvider>
          </ThemeProvider>
        </Grommet>
      </Auth0Provider>
    </div>
  </ApolloProvider>
);

export default App;
