import React from 'react';
import { RouteComponentProps } from 'react-router';
import { useChatQuery } from '../types/apolloTypes';
import { Loader } from '../components/Loader';

interface Params {
  _id: string;
}

// TODO
const isWaiting = chat => chat.readyUserIds.length === 1;

export const Chatting: React.FC<RouteComponentProps<Params>> = ({
  match: {
    params: { _id }
  }
}) => {
  const { data, loading } = useChatQuery({ variables: { _id } });

  if (loading || !data || isWaiting(data.chat)) return <Loader />;

  return <div>game</div>;
};
