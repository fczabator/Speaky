import React from 'react';
import styled from 'styled-components';
import { Word } from '../types/apolloTypes';
import { WordBox } from './WordBox';

const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

interface Props {
  words: Word[];
}

export const WordList: React.FC<Props> = ({ words }) => {
  return (
    <List>
      {words.map(word => (
        <WordBox key={word._id} word={word} />
      ))}
    </List>
  );
};
