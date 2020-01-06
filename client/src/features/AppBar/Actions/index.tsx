import React from 'react';
import { Switch } from 'react-router';
import { SelectWordsActions } from './SelectWordsActions';
import { ChatViewActions } from './ChatViewActions';
import { Route } from 'react-router-dom';
import { WordsActions } from './WordsActions';
import { ChatsActions } from './ChatsActions';
import { TopicsActions } from './TopicsActions';

export const Actions = () => {
  return (
    <div>
      <Switch>
        <Route path="/select-words/:chatId?" component={SelectWordsActions} />
        <Route path="/chat/:_id" component={ChatViewActions} />
        <Route path="/words" component={WordsActions} />
        <Route path="/chats" component={ChatsActions} />
        <Route path="/topics" component={TopicsActions} />
      </Switch>
    </div>
  );
};
