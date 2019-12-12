import React from 'react';
import config from './config';
import { ApolloProvider } from '@apollo/react-hooks';
import { AppBarProvider } from './context/appBarContext';
import { AppState, Auth0Provider } from './lib/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import { Grommet } from 'grommet';
import { NotificationProvider } from './context/useNotification';
import styled, { ThemeProvider } from 'styled-components';
import { client } from './lib/apollo';
import { theme, grommetTheme } from './theme';
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

const AppContainer = styled.div`
  height: 100vh;
`;

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <Grommet theme={grommetTheme}>
        <Auth0Provider
          domain={config.domain}
          client_id={config.clientId}
          redirect_uri={window.location.origin}
          onRedirectCallback={onRedirectCallback}
          audience={config.audience}
        >
          <ThemeProvider theme={theme}>
            <AppContainer>
              <AppBarProvider>
                <NotificationProvider>
                  <Router>
                    <Routes />
                  </Router>
                </NotificationProvider>
              </AppBarProvider>
            </AppContainer>
          </ThemeProvider>
        </Auth0Provider>
      </Grommet>
    </ApolloProvider>
  );
};

export default App;
