import React, { useEffect } from 'react';
import { InfiniteScroll } from 'grommet';
import { RouteComponentProps } from 'react-router';
import { Screen } from '../components/Screen';
import { WordBox } from '../components/WordBox';
import { useWordsQuery, Word, useChatQuery } from '../types/apolloTypes';
import { useAppBarContext } from '../context/appBarContext';

type Params = {
  chatId: string;
};

export const SelectWords: React.FC<RouteComponentProps<Params>> = ({
  match: {
    params: { chatId }
  }
}) => {
  const { data, loading } = useWordsQuery();
  const { selected, toggleSelected, setMode } = useAppBarContext();
  const { data: chatData } = useChatQuery({
    variables: { _id: chatId }
  });

  useEffect(() => {
    setMode('addToChat');
  }, []);

  if (loading || !data) {
    return null;
  }

  let words = data.words;

  if (chatId) {
    if (!chatData || !chatData.chat) {
      return null;
    }

    const {
      chat: { words: chatWords }
    } = chatData;

    words = words.filter(
      word => !chatWords.map(chatWord => chatWord._id).includes(word._id)
    );
  }

  return (
    <Screen>
      <InfiniteScroll items={words}>
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
