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
  console.log('add words to chat');
  const { data, loading } = useChatQuery({
    variables: { _id: chatId }
  });

  if (loading || !data || !data.chat) {
    return null;
  }

  const {
    chat: { words: chatWords }
  } = data;

  const filterWords = (words: Word[]) =>
    words.filter(
      word => !chatWords.map(chatWord => chatWord._id).includes(word._id)
    );

  return <SelectWords filterWords={filterWords} />;
};
