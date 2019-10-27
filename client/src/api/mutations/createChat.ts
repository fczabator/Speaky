import gql from 'graphql-tag';

export default gql`
  mutation createChat(
    $name: String!
    $wordIds: [String!]!
    $topicIds: [String!]
  ) {
    createChat(name: $name, wordIds: $wordIds, topicIds: $topicIds) {
      _id
      name
      words {
        _id
      }
      topics {
        _id
      }
    }
  }
`;
