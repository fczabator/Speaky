import React from 'react';
import { Button } from 'grommet';
import { Checkmark } from 'grommet-icons';

type Props = {
  onNavigate: (route: string) => void;
  selected: string[];
};

export const SelectWordsActions: React.FC<Props> = ({
  onNavigate,
  selected
}) => (
  <div>
    {selected.length ? (
      <Button
        icon={<Checkmark />}
        label={selected.length}
        onClick={() => onNavigate('/create-chat')}
      />
    ) : null}
  </div>
);
