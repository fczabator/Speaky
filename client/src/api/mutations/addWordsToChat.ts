import gql from 'graphql-tag';

export default gql`
  mutation addWordsToChat($_id: String!, $wordIds: [String!]!) {
    addWordsToChat(_id: $_id, wordIds: $wordIds)
  }
`;
