import React from 'react';
import config from './lib/config.json';
import { AddWord } from './screens/AddWord';
import { ApolloProvider } from '@apollo/react-hooks';
import { AppBarProvider } from './context/appBarContext';
import { AppLayout } from './components/AppLayout';
import { AppState, Auth0Provider } from './lib/auth';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ChatView } from './screens/ChatView';
import { Chatting } from './screens/Chatting';
import { ChatInvite } from './screens/ChatInvite';
import { ChatJoin } from './screens/ChatJoin';
import { CreateChat } from './screens/CreateChat';
import { Grommet } from 'grommet';
import { Home } from './screens/Home';
import { NotificationProvider } from './context/useNotification';
import { SelectWords } from './screens/SelectWords';
import { ThemeProvider } from 'styled-components';
import { Words } from './screens/Words';
import { client } from './lib/apollo';
import { theme } from './theme';
import { Chats } from './screens/Chats';

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
              <NotificationProvider>
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
                    <Route path="/chat-invite/:_id" component={ChatInvite} />
                    <Route path="/chatting/:_id" component={Chatting} />
                    <Route path="/chats" component={Chats} />
                    <Route path="/join-chat" component={ChatJoin} />
                  </AppLayout>
                </Router>
              </NotificationProvider>
            </AppBarProvider>
          </ThemeProvider>
        </Grommet>
      </Auth0Provider>
    </div>
  </ApolloProvider>
);

export default App;
