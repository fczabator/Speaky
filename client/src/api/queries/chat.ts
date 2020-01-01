import gql from 'graphql-tag';

export default gql`
  query chat($_id: String!) {
    chat(_id: $_id) {
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
        name
        userId
      }
      inviteCode
      started {
        date
        userId
        words {
          _id
          phrase
          translate
          userId
          learned
        }
      }
      userIds
      completedWordIds
    }
  }
`;
