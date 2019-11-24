import gql from 'graphql-tag';

export default gql`
  mutation completeChatWord($_id: ID!, $wordId: ID!) {
    completeChatWord(_id: $_id, wordId: $wordId) {
      _id
    }
  }
`;
