import React from 'react';
import config from './lib/config.json';
import { AddWord } from './screens/AddWord';
import { ApolloProvider } from '@apollo/react-hooks';
import { AppBarProvider } from './context/appBarContext';
import { AppLayout } from './components/AppLayout';
import { AppState, Auth0Provider, useAuth0 } from './lib/auth';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ChatView } from './screens/ChatView';
import { Chatting } from './screens/Chatting';
import { ChatInvite } from './screens/ChatInvite';
import { ChatSummary } from './screens/ChatSummary';
import { ChatJoin } from './screens/ChatJoin';
import { CreateChat } from './screens/CreateChat';
import { Grommet } from 'grommet';
import { Home } from './screens/Home';
import { NotificationProvider } from './context/useNotification';
import { SelectWords } from './screens/SelectWords';
import { ThemeProvider } from 'styled-components';
import { Words } from './screens/Words';
import { client } from './lib/apollo';
import { theme, grommetTheme } from './theme';
import { Chats } from './screens/Chats';
import { Routes } from './Routes';

const onRedirectCallback = (appState: AppState) => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <div style={{ height: '100vh', backgroundColor: '#FAFAFA' }}>
        <Auth0Provider
          domain={config.domain}
          client_id={config.clientId}
          redirect_uri={window.location.origin}
          onRedirectCallback={onRedirectCallback}
          audience={config.audience}
        >
          <Grommet theme={grommetTheme}>
            <ThemeProvider theme={theme}>
              <AppBarProvider>
                <NotificationProvider>
                  <Router>
                    <Routes />
                  </Router>
                </NotificationProvider>
              </AppBarProvider>
            </ThemeProvider>
          </Grommet>
        </Auth0Provider>
      </div>
    </ApolloProvider>
  );
};

export default App;
