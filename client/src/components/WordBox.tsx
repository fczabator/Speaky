import React from 'react';
import { Box, Text } from 'grommet';
import { Word } from '../types/apolloTypes';

export const WordBox: React.FC<Word> = ({ word, translate }) => (
  <Box
    elevation="medium"
    margin="small"
    pad="small"
    direction="column"
    align="center"
    justify="center"
    background="white"
  >
    <Text size="large">{word}</Text>
    <Text size="medium">{translate}</Text>
  </Box>
);
