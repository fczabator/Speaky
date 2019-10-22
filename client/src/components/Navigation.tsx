import React from 'react';
import { useHistory } from 'react-router-dom';
import { Anchor, Box } from 'grommet';

const navigationItems = [
  {
    label: 'Add word',
    route: 'add-word'
  },
  {
    label: 'Words',
    route: 'words'
  }
];

type Props = {
  onSelect: () => void;
};

export const Navigation: React.FC<Props> = ({ onSelect }) => {
  const history = useHistory();

  const handleClick = (route: string) => {
    onSelect();
    history.push(route);
  };

  return (
    <Box direction="column" justify="center" align="center">
      {navigationItems.map(({ label, route }) => (
        <Anchor
          key={route}
          margin="small"
          onClick={() => handleClick(route)}
          label={label}
        />
      ))}
    </Box>
  );
};
