import gql from 'graphql-tag';

export default gql`
  query chat($_id: String!) {
    chat(_id: $_id) {
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
        name
      }
      inviteCode
      started {
        date
        userId
        wordIds
        words {
          _id
          word
          translate
          userId
        }
      }
      userIds
      wordIds
      topicIds
      completedWordIds
    }
  }
`;
