import React from 'react';
import { Button } from 'grommet';
import { Checkmark, Add } from 'grommet-icons';
import chatQuery from '../../api/queries/chat';
import { useAddWordsToChatMutation } from '../../types/apolloTypes';
import { useAppBarContext } from '../../context/appBarContext';

type Props = {
  onNavigate: (route: string) => void;
  selected: string[];
  entity?: string;
  onClearSelection: () => void;
};

export const SelectWordsActions: React.FC<Props> = ({
  onNavigate,
  selected,
  entity,
  onClearSelection
}) => {
  const [addWordsToChat] = useAddWordsToChatMutation({
    refetchQueries: [{ query: chatQuery, variables: { _id: entity } }]
  });

  const handleClick = () => {
    if (entity) {
      addWordsToChat({ variables: { _id: entity, wordIds: selected } });
      onClearSelection();
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
