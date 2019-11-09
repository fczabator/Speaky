import gql from 'graphql-tag';

export default gql`
  mutation addWordsToChat($_id: ID!, $wordIds: [ID!]!) {
    addWordsToChat(_id: $_id, wordIds: $wordIds)
  }
`;
