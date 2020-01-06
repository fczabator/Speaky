import React from 'react';
import { Box, Text } from 'grommet';
import { Topic } from '../types/apolloTypes';

type Props = {
  topic: Topic;
  onClick?: (id: string) => void;
};

export const TopicBox: React.FC<Props> = ({
  topic: { _id, name },
  onClick
}) => (
  <Box
    animation={['fadeIn']}
    elevation="medium"
    margin="small"
    pad="small"
    direction="column"
    align="center"
    justify="center"
    background="accent"
    onClick={() => onClick && onClick(_id)}
  >
    <Text size="large">{name}</Text>
  </Box>
);
