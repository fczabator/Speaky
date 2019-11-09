import gql from 'graphql-tag';

export default gql`
  mutation removeWordsFromChat($_id: ID!, $wordIds: [ID!]!) {
    removeWordsFromChat(_id: $_id, wordIds: $wordIds)
  }
`;
