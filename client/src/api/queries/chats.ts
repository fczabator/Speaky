import gql from 'graphql-tag';

export default gql`
  query chats {
    chats {
      _id
      name
      isCompleted
      words {
        _id
        phrase
        translate
        userId
        learned
      }
      topics {
        _id
      }
    }
  }
`;
