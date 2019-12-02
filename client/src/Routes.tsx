import React from 'react';
import { AppLayout } from './components/AppLayout';
import { Route } from 'react-router-dom';
import { AddWord } from './screens/AddWord';
import { Words } from './screens/Words';
import { SelectWords } from './screens/SelectWords';
import { CreateChat } from './screens/CreateChat';
import { ChatView } from './screens/ChatView';
import { ChatInvite } from './screens/ChatInvite';
import { Chatting } from './screens/Chatting';
import { Chats } from './screens/Chats';
import { ChatJoin } from './screens/ChatJoin';
import { ChatSummary } from './screens/ChatSummary';
import { AuthRoute } from './components/AuthRoute';
import { Login } from './screens/Login';

export const Routes = () => {
  return (
    <AppLayout>
      <Route exact path="/login" component={Login} />
      <AuthRoute path="/add-word" component={AddWord} />
      <AuthRoute path="/words" component={Words} />
      <AuthRoute path="/select-words/:chatId?" component={SelectWords} />
      <AuthRoute path="/create-chat" component={CreateChat} />
      <AuthRoute path="/chat/:_id" component={ChatView} />
      <AuthRoute path="/chat-invite/:_id" component={ChatInvite} />
      <AuthRoute path="/chatting/:_id" component={Chatting} />
      <AuthRoute path="/chats" component={Chats} />
      <AuthRoute path="/join-chat" component={ChatJoin} />
      <AuthRoute path="/summary:_id" component={ChatSummary} />
    </AppLayout>
  );
};
