import React, { useEffect } from 'react';
import { InfiniteScroll } from 'grommet';
import { RouteComponentProps } from 'react-router';
import { Screen } from './Screen';
import { WordBox } from './WordBox';
import { useWordsQuery, Word, useChatQuery } from '../types/apolloTypes';
import { useAppBarContext } from '../context/appBarContext';

interface Props {
  filterWords: (words: Word[]) => Word[];
}

export const SelectWords: React.FC<Props> = ({ filterWords }) => {
  const { data, loading } = useWordsQuery();
  const { selected, toggleSelected } = useAppBarContext();

  if (loading || !data) {
    return null;
  }

  return (
    <Screen>
      <InfiniteScroll items={filterWords(data.words)}>
        {(word: Word) => (
          <WordBox
            word={word}
            key={word._id}
            onClick={toggleSelected}
            isSelected={selected.includes(word._id)}
          />
        )}
      </InfiniteScroll>
    </Screen>
  );
};

SelectWords.defaultProps = {
  filterWords: words => words
};
