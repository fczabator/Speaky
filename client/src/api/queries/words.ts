import gql from 'graphql-tag';

export default gql`
  query words {
    words {
      _id
      word
      translate
      userId
    }
  }
`;
