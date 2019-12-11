import React from 'react';
import { Switch } from 'react-router';
import { SelectWordsActions } from './SelectWordsActions';
import { ChatViewActions } from './ChatViewActions';
import { Route } from 'react-router-dom';

export const Actions = () => {
  return (
    <div>
      <Switch>
        <Route path="/select-words:chatId?" component={SelectWordsActions} />
        <Route path="/chat:_id" component={ChatViewActions} />
      </Switch>
    </div>
  );
};
