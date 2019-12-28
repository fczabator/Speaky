import gql from 'graphql-tag';

export const typeDef = gql`
  extend type Query {
    chats: [Chat!]!
    chat(_id: String!): Chat
  }
  extend type Mutation {
    createChat(name: String!, wordIds: [ID!]!, topicIds: [ID!]): Chat!
    addWordsToChat(_id: ID!, wordIds: [ID!]!): Boolean!
    removeWordsFromChat(_id: ID!, wordIds: [ID!]!): Boolean!
    inviteUserToChat(_id: ID!, userId: ID!): Boolean!
    joinChat(inviteCode: String!): Chat!
    startChat(_id: ID!): Chat!
    completeChatWord(_id: ID!, wordId: ID!): Chat!
  }
  type StartedChat {
    date: DateTime
    userId: ID!
    words: [Word!]!
  }
  type Chat {
    _id: ID!
    name: String!
    words: [Word!]!
    topics: [Topic!]
    userIds: [ID!]!
    inviteCode: String!
    started: [StartedChat!]!
    completedWordIds: [String!]!
    isCompleted: Boolean!
  }
`;
