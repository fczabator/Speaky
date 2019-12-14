import React, { useCallback } from 'react';
import { RouteComponentProps } from 'react-router';
import { SelectWords } from '../components/SelectWords';
import { Word, useChatQuery } from '../types/apolloTypes';

type Params = {
  chatId: string;
};

export const AddWordsToChat: React.FC<RouteComponentProps<Params>> = ({
  match: {
    params: { chatId }
  }
}) => {
  const { data, loading } = useChatQuery({
    variables: { _id: chatId }
  });

  const chatWords = data?.chat?.words || [];

  const filterWords = useCallback(
    (words: Word[]) =>
      words.filter(
        word => !chatWords.map(chatWord => chatWord._id).includes(word._id)
      ),
    []
  );

  if (loading || !data || !data.chat) {
    return null;
  }

  return <SelectWords filterWords={filterWords} />;
};
