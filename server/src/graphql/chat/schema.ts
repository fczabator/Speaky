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
    wordIds: [String!]!
  }
  type Chat {
    _id: ID!
    name: String!
    wordIds: [ID!]!
    words: [Word!]!
    topics: [Topic!]
    topicIds: [ID!]
    userIds: [ID!]!
    inviteCode: String!
    started: [StartedChat!]!
    completedWordIds: [String!]!
    isCompleted: Boolean!
  }
`;
