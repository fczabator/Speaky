import React from 'react';
import config from './config';
import { ApolloProvider } from '@apollo/react-hooks';
import { AppBarProvider } from './context/appBarContext';
import { AppState, Auth0Provider } from './lib/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import { Grommet } from 'grommet';
import { NotificationProvider } from './context/useNotification';
import { ThemeProvider } from 'styled-components';
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
                    <span>
                      `${config.audience} ${config.clientId} ${config.domain} $
                      {window.location.origin}`
                    </span>
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
