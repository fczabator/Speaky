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
import { ChatProvider } from './context/chatContext';
import { ChatView } from './screens/ChatView';

export const App = () => (
  <ApolloProvider client={client}>
    <div style={{ height: '100vh', backgroundColor: '#FAFAFA' }}>
      <Grommet>
        <ThemeProvider theme={theme}>
          <ChatProvider>
            <Router>
              <AppLayout>
                <Route exact path="/" component={Home} />
                <Route path="/add-word" component={AddWord} />
                <Route path="/words" component={Words} />
                <Route path="/select-words" component={SelectWords} />
                <Route path="/create-chat" component={CreateChat} />
                <Route path="/chat/:_id" component={ChatView} />
              </AppLayout>
            </Router>
          </ChatProvider>
        </ThemeProvider>
      </Grommet>
    </div>
  </ApolloProvider>
);

export default App;
