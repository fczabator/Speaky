import React from 'react';
import { useAppBarContext } from '../../context/appBarContext';
import { useHistory, useParams } from 'react-router';
import { SelectWordsActions } from './SelectWordsActions';
import { ChatViewActions } from './ChatViewActions';

export const Actions = () => {
  const { selected, mode, entity } = useAppBarContext();
  console.log('entity', entity);
  const history = useHistory();

  const handleNavigate = (route: string) => history.push(route);

  switch (mode) {
    case 'addToChat': {
      return (
        <SelectWordsActions selected={selected} onNavigate={handleNavigate} />
      );
    }
    case 'chatView': {
      return (
        <ChatViewActions
          selected={selected}
          onNavigate={handleNavigate}
          entity={entity}
        />
      );
    }
    default:
      return null;
  }
};
