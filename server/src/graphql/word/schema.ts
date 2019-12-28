import gql from 'graphql-tag';

export const typeDef = gql`
  extend type Query {
    words: [Word!]!
    word(_id: String!): Word
  }
  extend type Mutation {
    createWord(phrase: String!, translate: String): Word!
    deleteWord(_id: String!): Boolean!
  }
  type Word {
    _id: ID!
    learned: Boolean
    translate: String
    userId: ID!
    phrase: String!
  }
`;
