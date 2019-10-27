import React, { useState } from 'react';
import { InfiniteScroll } from 'grommet';
import { RouteComponentProps } from 'react-router';
import { Screen } from '../components/Screen';
import { WordBox } from '../components/WordBox';
import { useWordsQuery, Word } from '../types/apolloTypes';
import { filterIfIsNotUnique } from '../lib/helpers';

export const CreateChat: React.FC<RouteComponentProps> = () => {
  const [selected, setSelected] = useState<String[]>([]);
  const { data, loading } = useWordsQuery();
  console.log('data', data);

  const toggleSelected = (id: string) =>
    setSelected(filterIfIsNotUnique([...selected, id]));

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
