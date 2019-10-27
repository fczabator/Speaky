import gql from 'graphql-tag';

export default gql`
  mutation removeWordsFromChat($_id: String!, $wordIds: [String!]!) {
    removeWordsFromChat(_id: $_id, wordIds: $wordIds)
  }
`;
