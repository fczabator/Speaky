import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { RouteComponentProps } from 'react-router';

const FETCH_WORDS = gql`
  query {
    words {
      word
      _id
      translate
    }
  }
`;

export const Home: React.FC<RouteComponentProps> = props => {
  const { data, error, loading } = useQuery(FETCH_WORDS);
  console.log('data', data);

  return <div>home</div>;
};
