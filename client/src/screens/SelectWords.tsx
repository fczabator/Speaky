import React, { useEffect } from 'react';
import { InfiniteScroll } from 'grommet';
import { RouteComponentProps } from 'react-router';
import { Screen } from '../components/Screen';
import { WordBox } from '../components/WordBox';
import { useWordsQuery, Word } from '../types/apolloTypes';
import { useAppBarContext } from '../context/appBarContext';

export const SelectWords: React.FC<RouteComponentProps> = () => {
  const { data, loading } = useWordsQuery();
  const { mode, selected, toggleSelected, setMode } = useAppBarContext();

  useEffect(() => {
    // if (mode !== 'chatView') {
    setMode('addToChat');
    // }
  }, []);

  if (loading || !data) {
    return null;
  }

  return (
    <Screen>
      <InfiniteScroll items={data.words}>
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
