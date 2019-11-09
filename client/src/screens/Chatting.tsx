import React from 'react';
import { RouteComponentProps } from 'react-router';
import { useChatQuery } from '../types/apolloTypes';

interface Params {
  _id: string;
}

export const Chatting: React.FC<RouteComponentProps<Params>> = ({
  match: {
    params: { _id }
  }
}) => {
  const { data } = useChatQuery({ variables: { _id } });

  return <div>Chatting</div>;
};
