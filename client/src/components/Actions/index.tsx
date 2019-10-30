import React from 'react';
import { useAppBarContext } from '../../context/appBarContext';
import { useHistory } from 'react-router';
import { SelectWordsActions } from './SelectWordsActions';
import { ChatViewActions } from './ChatViewActions';

export const Actions = () => {
  const { clearAll, selected, mode, entity } = useAppBarContext();
  const history = useHistory();

  const handleNavigate = (route: string) => history.push(route);

  switch (mode) {
    case 'addToChat': {
      return (
        <SelectWordsActions
          selected={selected}
          onNavigate={handleNavigate}
          entity={entity}
          onClearSelection={clearAll}
        />
      );
    }
    case 'chatView': {
      return entity ? (
        <ChatViewActions
          selected={selected}
          onNavigate={handleNavigate}
          entity={entity}
          onClearSelection={clearAll}
        />
      ) : null;
    }
    default:
      return null;
  }
};
