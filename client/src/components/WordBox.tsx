import React from 'react';
import { Box, Text } from 'grommet';
import { Word } from '../types/apolloTypes';

type Props = {
  word: Word;
  onClick?: (id: string) => void;
  isSelected?: boolean;
  withTranslation?: boolean;
};

export const WordBox: React.FC<Props> = ({
  word: { _id, phrase, translate },
  onClick,
  isSelected,
  withTranslation
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
    <Text size="large">{phrase}</Text>
    {withTranslation && <Text size="medium">{translate}</Text>}
  </Box>
);
