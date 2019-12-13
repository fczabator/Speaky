import React from 'react';
import { Button } from 'grommet';
import { Checkmark, Add } from 'grommet-icons';
import chatQuery from '../../../api/queries/chat';
import {
  useAddWordsToChatMutation,
  useChatQuery
} from '../../../types/apolloTypes';
import { useAppBarContext } from '../../../context/appBarContext';
import { RouteComponentProps, useHistory } from 'react-router-dom';

interface Params {
  chatId: string;
}

export const SelectWordsActions: React.FC<RouteComponentProps<Params>> = ({
  match: {
    params: { chatId }
  }
}) => {
  const { data } = useChatQuery({ variables: { _id: chatId } });
  const [addWordsToChat] = useAddWordsToChatMutation({
    refetchQueries: [{ query: chatQuery, variables: { _id: chatId } }]
  });
  const history = useHistory();
  const { clearAll, selected } = useAppBarContext();
  const chat = data?.chat;

  const handleClick = () => {
    if (chat) {
      debugger;
      addWordsToChat({ variables: { _id: chatId, wordIds: selected } });
      clearAll();
      history.push(`/chat/${chatId}`);
    } else {
      history.push('create-chat');
    }
  };

  return (
    <div>
      {selected.length ? (
        <Button
          icon={chat ? <Add /> : <Checkmark />}
          label={selected.length}
          onClick={handleClick}
        />
      ) : null}
    </div>
  );
};
