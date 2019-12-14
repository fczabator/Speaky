import React from 'react';
import { Add, Subtract } from 'grommet-icons';
import { Button, Box } from 'grommet';
import chatQuery from '../../../api/queries/chat';
import {
  useRemoveWordsFromChatMutation,
  useChatQuery
} from '../../../types/apolloTypes';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import { useAppBarContext } from '../../../context/appBarContext';

interface Params {
  _id: string;
}

export const ChatViewActions: React.FC<RouteComponentProps<Params>> = ({
  match: {
    params: { _id }
  }
}) => {
  const { data } = useChatQuery({ variables: { _id } });
  const [removeWordsFromChat] = useRemoveWordsFromChatMutation({
    refetchQueries: [{ query: chatQuery, variables: { _id } }]
  });
  const history = useHistory();

  const chat = data?.chat;
  const { clearAll, selected } = useAppBarContext();

  const handleRemove = () => {
    removeWordsFromChat({ variables: { _id, wordIds: selected } });
    clearAll();
  };

  const handleAdd = () => {
    history.push(`/select-words/${_id}`);
    clearAll();
  };

  const handleInviteUser = () => {
    history.push(`/chat-invite/${_id}`);
  };

  return (
    <Box align="center" direction="row">
      <Button onClick={handleInviteUser}>invite</Button>
      <Button icon={<Add />} onClick={handleAdd} />
      <Button
        color="brand"
        icon={<Subtract />}
        label={selected.length ? selected.length : 0}
        onClick={handleRemove}
      />
    </Box>
  );
};
