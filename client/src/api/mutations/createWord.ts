import gql from 'graphql-tag';

export default gql`
  mutation createWord($word: String!, $translate: String) {
    createWord(word: $word, translate: $translate) {
      _id
      translate
      word
    }
  }
`;
