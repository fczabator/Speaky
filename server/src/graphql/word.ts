import gql from 'graphql-tag';
import { Resolvers } from '../types/apolloTypes';
import { ApolloError } from 'apollo-server-core';

export const typeDef = gql`
  extend type Query {
    words: [Word!]!
  }
  extend type Mutation {
    createWord(word: String!, translate: String!): Word!
  }
  type Word {
    _id: ID!
    word: String!
    translate: String!
  }
`;

export const resolvers: Resolvers = {
    Query: {
        words: (root, input, context) => {
            return context.DB.collection('words')
                .find()
                .toArray();
        }
    },
    Mutation: {
        createWord: async (root, input, context) => {
            const result = await context.DB.collection('words').insertOne({
                ...input
            });

            if (!result.ops || !result.ops[0]) {
                throw new ApolloError('Could not create word');
            }

            return result.ops[0];
        }
    }
};
