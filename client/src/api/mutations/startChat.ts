import gql from 'graphql-tag';

export default gql`
  mutation startChat($_id: ID!) {
    startChat(_id: $_id) {
      _id
    }
  }
`;
