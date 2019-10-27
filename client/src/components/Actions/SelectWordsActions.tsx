import React from 'react';
import { Button } from 'grommet';
import { Checkmark, Add } from 'grommet-icons';
import chatQuery from '../../api/queries/chat';
import { useAddWordsToChatMutation } from '../../types/apolloTypes';

type Props = {
  onNavigate: (route: string) => void;
  selected: string[];
  entity?: string;
};

export const SelectWordsActions: React.FC<Props> = ({
  onNavigate,
  selected,
  entity
}) => {
  const [addWordsToChat] = useAddWordsToChatMutation({
    refetchQueries: [{ query: chatQuery, variables: { _id: entity } }]
  });

  const handleClick = () => {
    if (entity) {
      addWordsToChat({ variables: { _id: entity, wordIds: selected } });
      onNavigate(`/chat/${entity}`);
    } else {
      onNavigate('create-chat');
    }
  };

  return (
    <div>
      {selected.length ? (
        <Button
          icon={entity ? <Add /> : <Checkmark />}
          label={selected.length}
          onClick={handleClick}
        />
      ) : null}
    </div>
  );
};
