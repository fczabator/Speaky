import gql from 'graphql-tag';

export default gql`
  query chat($_id: String!) {
    chat(_id: $_id) {
      _id
      name
      isCompleted
      words {
        _id
        word
        translate
        userId
        learned
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
          learned
        }
      }
      userIds
      wordIds
      topicIds
      completedWordIds
    }
  }
`;
