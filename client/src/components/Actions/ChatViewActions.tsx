import React from 'react';
import { Button } from 'grommet';
import { Add, Subtract } from 'grommet-icons';
import chatQuery from '../../api/queries/chat';
import { useRemoveWordsFromChatMutation } from '../../types/apolloTypes';

type Props = {
  onNavigate: (route: string) => void;
  selected: string[];
  entity: string;
};

export const ChatViewActions: React.FC<Props> = ({
  onNavigate,
  selected,
  entity
}) => {
  const [removeWordsFromChat] = useRemoveWordsFromChatMutation({
    refetchQueries: [{ query: chatQuery, variables: { _id: entity } }]
  });

  const handleRemove = () => {
    removeWordsFromChat({ variables: { _id: entity, wordIds: selected } });
  };

  return (
    <div>
      <Button icon={<Add />} onClick={() => onNavigate('/select-words')} />
      <Button
        icon={<Subtract />}
        label={selected.length ? selected.length : 0}
        onClick={handleRemove}
      />
    </div>
  );
};
