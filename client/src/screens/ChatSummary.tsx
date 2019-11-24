import React from 'react';
import { RouteComponentProps } from 'react-router';
import { useChatQuery } from '../types/apolloTypes';
import { WordBox } from '../components/WordBox';

interface Params {
  _id: string;
}

export const ChatSummary: React.FC<RouteComponentProps<Params>> = ({
  match: {
    params: { _id }
  }
}) => {
  const { data, loading } = useChatQuery({
    variables: { _id }
  });

  if (loading || !data || !data.chat) {
    return null;
  }

  return (
    <div>
      <h1>Congratualions!</h1>
      <h2>You did it!</h2>
      <span>Learned words:</span>
      {data.chat.words.map(word => (
        <WordBox key={word._id} word={word} />
      ))}
    </div>
  );
};
