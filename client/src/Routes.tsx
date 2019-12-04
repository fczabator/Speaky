import React from 'react';
import { AddWord } from './screens/AddWord';
import { AppLayout } from './components/AppLayout';
import { AuthRoute } from './components/AuthRoute';
import { ChatInvite } from './screens/ChatInvite';
import { ChatJoin } from './screens/ChatJoin';
import { ChatSummary } from './screens/ChatSummary';
import { ChatView } from './screens/ChatView';
import { Chats } from './screens/Chats';
import { Chatting } from './screens/Chatting';
import { CreateChat } from './screens/CreateChat';
import { Home } from './screens/Home';
import { Login } from './screens/Login';
import { Route } from 'react-router-dom';
import { SelectWords } from './screens/SelectWords';
import { Words } from './screens/Words';

export const Routes = () => {
  return (
    <AppLayout>
      <Route exact path="/login" component={Login} />
      <AuthRoute exact path="/" component={Home} />
      <AuthRoute path="/add-word" component={AddWord} />
      <AuthRoute path="/words" component={Words} />
      <AuthRoute path="/select-words/:chatId?" component={SelectWords} />
      <AuthRoute path="/create-chat" component={CreateChat} />
      <AuthRoute path="/chat/:_id" component={ChatView} />
      <AuthRoute path="/chat-invite/:_id" component={ChatInvite} />
      <AuthRoute path="/chatting/:_id" component={Chatting} />
      <AuthRoute path="/chats" component={Chats} />
      <AuthRoute path="/join-chat" component={ChatJoin} />
      <AuthRoute path="/summary/:_id" component={ChatSummary} />
    </AppLayout>
  );
};
