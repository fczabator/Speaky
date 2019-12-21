import React from 'react';
import { AddWord } from './features/AddWord';
import { AppLayout } from './components/AppLayout';
import { AuthRoute } from './components/AuthRoute';
import { ChatInvite } from './features/ChatInvite';
import { ChatJoin } from './features/ChatJoin';
import { ChatSummary } from './features/ChatSummary';
import { ChatView } from './features/ChatView';
import { Chats } from './features/Chats';
import { Chatting } from './features/Chatting';
import { CreateChat } from './features/CreateChat';
import { Home } from './features/Home';
import { SelectWords } from './components/SelectWords';
import { Words } from './features/Words';
import { AddWordsToChat } from './features/AddWordsToChat';
import { Route, Switch } from 'react-router-dom';

const NoMatch = () => <div>Not Found :(</div>;

export const Routes = () => {
  return (
    <>
      <AppLayout>
        <Switch>
          <AuthRoute exact path="/" component={Home} />
          <AuthRoute path="/add-word" component={AddWord} />
          <AuthRoute path="/words" component={Words} />
          <AuthRoute
            exact
            path="/select-words/:chatId"
            component={AddWordsToChat}
          />
          <AuthRoute path="/select-words" component={SelectWords} />
          <AuthRoute path="/create-chat" component={CreateChat} />
          <AuthRoute path="/chat/:_id" component={ChatView} />
          <AuthRoute path="/chat-invite/:_id" component={ChatInvite} />
          <AuthRoute path="/chatting/:_id" component={Chatting} />
          <AuthRoute path="/chats" component={Chats} />
          <AuthRoute path="/join-chat" component={ChatJoin} />
          <AuthRoute path="/summary/:_id" component={ChatSummary} />
          <Route component={NoMatch} />
        </Switch>
      </AppLayout>
    </>
  );
};
