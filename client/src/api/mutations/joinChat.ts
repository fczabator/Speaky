import gql from 'graphql-tag';

export default gql`
  mutation joinChat($inviteCode: String!) {
    joinChat(inviteCode: $inviteCode) {
      _id
    }
  }
`;
