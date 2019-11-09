import React from 'react';
import { Box, Text } from 'grommet';
import { Chat } from '../types/apolloTypes';

type Props = {
  chat: Chat;
  onClick?: (id: string) => void;
};

export const ChatBox: React.FC<Props> = ({ chat: { _id, name }, onClick }) => (
  <Box
    animation={['fadeIn']}
    elevation="medium"
    margin="small"
    pad="small"
    direction="column"
    align="center"
    justify="center"
    background="brand"
    onClick={() => onClick && onClick(_id)}
  >
    <Text size="large">{name}</Text>
  </Box>
);
