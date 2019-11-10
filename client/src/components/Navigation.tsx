import React from 'react';
import { useHistory } from 'react-router-dom';
import { Anchor, Box } from 'grommet';
import { useAuth0 } from '../lib/auth';

const navigationItems = [
  {
    label: 'New word',
    route: '/add-word'
  },
  {
    label: 'Words',
    route: '/words'
  },
  {
    label: 'New chat',
    route: '/select-words'
  },
  {
    label: 'Chats',
    route: '/chats'
  },
  {
    label: 'Join chat',
    route: '/join-chat'
  }
];

type Props = {
  onSelect: () => void;
};

export const Navigation: React.FC<Props> = ({ onSelect }) => {
  const history = useHistory();
  const { logout } = useAuth0();

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
      <Anchor key="logout" margin="small" onClick={logout} label="Logout" />
    </Box>
  );
};
