import gql from 'graphql-tag';
import { Resolvers } from '../types/apolloTypes';
import { ApolloError } from 'apollo-server-core';

export const typeDef = gql`
  extend type Query {
    topics: [Topic!]!
  }
  extend type Mutation {
    createTopic(name: String!): Topic!
  }
  type Topic {
    _id: ID!
    name: String!
  }
`;

export const resolvers: Resolvers = {
    Query: {
        topics: (root, input, context) => {
            return context.DB.collection('topics')
                .find()
                .toArray();
        }
    },
    Mutation: {
        createTopic: async (root, input, context) => {
            const result = await context.DB.collection('topics').insertOne(input);

            if (!result.ops || !result.ops[0]) {
                throw new ApolloError('Could not create topic');
            }

            return result.ops[0];
        }
    }
};
