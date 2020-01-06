import gql from 'graphql-tag';

export const typeDef = gql`
  extend type Query {
    topics: [Topic!]!
    topic(_id: String!): Topic
  }
  extend type Mutation {
    createTopic(name: String!, description: String): Topic!
  }
  type Topic {
    _id: ID!
    name: String!
    description: String
    userId: ID
  }
`;
