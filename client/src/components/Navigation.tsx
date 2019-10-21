import React from 'react';
import { useHistory } from 'react-router-dom';
import { Anchor, Box } from 'grommet';

type Props = {
  onSelect: () => void;
};

export const Navigation: React.FC<Props> = ({ onSelect }) => {
  const history = useHistory();

  const handleClick = () => {
    onSelect();
    history.push('/add-word');
  };

  return (
    <Box direction="column" justify="center" align="center">
      <Anchor margin="small" onClick={handleClick} label="Add" />
    </Box>
  );
};
