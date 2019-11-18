import React from 'react';
import { Box, Text } from 'grommet';
import { Word } from '../types/apolloTypes';

type Props = {
  word: Word;
  onClick?: (id: string) => void;
  isSelected?: boolean;
};

export const WordBox: React.FC<Props> = ({
  word: { _id, word, translate },
  onClick,
  isSelected
}) => (
  <Box
    animation={['fadeIn']}
    elevation="medium"
    margin="small"
    pad="small"
    direction="column"
    align="center"
    justify="center"
    background={isSelected ? 'brand' : 'white'}
    onClick={() => onClick && onClick(_id)}
  >
    <Text size="large">{word}</Text>
    <Text size="medium">{translate}</Text>
  </Box>
);