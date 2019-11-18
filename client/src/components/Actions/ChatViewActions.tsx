import React from 'react';
import { Add, Subtract } from 'grommet-icons';
import { Button, Box } from 'grommet';
import chatQuery from '../../api/queries/chat';
import { useRemoveWordsFromChatMutation } from '../../types/apolloTypes';

type Props = {
  entity: string;
  onClearSelection: () => void;
  onNavigate: (route: string) => void;
  selected: string[];
};

export const ChatViewActions: React.FC<Props> = ({
  onNavigate,
  selected,
  entity,
  onClearSelection
}) => {
  const [removeWordsFromChat] = useRemoveWordsFromChatMutation({
    refetchQueries: [{ query: chatQuery, variables: { _id: entity } }]
  });

  const handleRemove = () => {
    removeWordsFromChat({ variables: { _id: entity, wordIds: selected } });
    onClearSelection();
  };

  const handleAdd = () => {
    onNavigate(`/select-words/${entity}`);
    onClearSelection();
  };

  const handleInviteUser = () => {
    onNavigate(`/chat-invite/${entity}`);
  };

  return (
    <Box align="center" direction="row">
      <Button onClick={handleInviteUser}>invite</Button>
      <Button icon={<Add />} onClick={handleAdd} />
      <Button
        icon={<Subtract />}
        label={selected.length ? selected.length : 0}
        onClick={handleRemove}
      />
    </Box>
  );
};