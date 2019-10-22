import { gql } from 'apollo-boost';

export default gql`
  query words {
    words {
      _id
      word
      translate
    }
  }
`;
