import gql from 'graphql-tag';

export default gql`
  query chats {
    chats {
      _id
      name
      words {
        _id
        word
        translate
        userId
      }
      topics {
        _id
      }
    }
  }
`;
