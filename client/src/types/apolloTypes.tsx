import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** Use JavaScript Date object for date/time fields. */
  DateTime: any,
};

export type Chat = {
   __typename?: 'Chat',
  _id: Scalars['ID'],
  name: Scalars['String'],
  words: Array<Word>,
  topics: Array<Topic>,
  userIds: Array<Scalars['ID']>,
  inviteCode: Scalars['String'],
  started: Array<StartedChat>,
  completedWordIds: Array<Scalars['String']>,
  isCompleted: Scalars['Boolean'],
};


export type Mutation = {
   __typename?: 'Mutation',
  _empty?: Maybe<Scalars['String']>,
  createWord: Word,
  deleteWord: Scalars['Boolean'],
  createChat: Chat,
  addWordsToChat: Scalars['Boolean'],
  removeWordsFromChat: Scalars['Boolean'],
  inviteUserToChat: Scalars['Boolean'],
  joinChat: Chat,
  startChat: Chat,
  completeChatWord: Chat,
  createTopic: Topic,
};


export type MutationCreateWordArgs = {
  phrase: Scalars['String'],
  translate?: Maybe<Scalars['String']>
};


export type MutationDeleteWordArgs = {
  _id: Scalars['String']
};


export type MutationCreateChatArgs = {
  name: Scalars['String'],
  wordIds: Array<Scalars['ID']>,
  topicIds?: Maybe<Array<Scalars['ID']>>
};


export type MutationAddWordsToChatArgs = {
  _id: Scalars['ID'],
  wordIds: Array<Scalars['ID']>
};


export type MutationRemoveWordsFromChatArgs = {
  _id: Scalars['ID'],
  wordIds: Array<Scalars['ID']>
};


export type MutationInviteUserToChatArgs = {
  _id: Scalars['ID'],
  userId: Scalars['ID']
};


export type MutationJoinChatArgs = {
  inviteCode: Scalars['String']
};


export type MutationStartChatArgs = {
  _id: Scalars['ID']
};


export type MutationCompleteChatWordArgs = {
  _id: Scalars['ID'],
  wordId: Scalars['ID']
};


export type MutationCreateTopicArgs = {
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>
};

export type Query = {
   __typename?: 'Query',
  _empty?: Maybe<Scalars['String']>,
  words: Array<Word>,
  word?: Maybe<Word>,
  chats: Array<Chat>,
  chat?: Maybe<Chat>,
  topics: Array<Topic>,
  topic?: Maybe<Topic>,
};


export type QueryWordArgs = {
  _id: Scalars['String']
};


export type QueryChatArgs = {
  _id: Scalars['String']
};


export type QueryTopicArgs = {
  _id: Scalars['String']
};

export type StartedChat = {
   __typename?: 'StartedChat',
  date?: Maybe<Scalars['DateTime']>,
  userId: Scalars['ID'],
  words: Array<Word>,
};

export type Topic = {
   __typename?: 'Topic',
  _id: Scalars['ID'],
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  userId: Scalars['ID'],
};

export type Word = {
   __typename?: 'Word',
  _id: Scalars['ID'],
  learned?: Maybe<Scalars['Boolean']>,
  translate?: Maybe<Scalars['String']>,
  userId: Scalars['ID'],
  phrase: Scalars['String'],
};

export type AddWordsToChatMutationVariables = {
  _id: Scalars['ID'],
  wordIds: Array<Scalars['ID']>
};


export type AddWordsToChatMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'addWordsToChat'>
);

export type CompleteChatWordMutationVariables = {
  _id: Scalars['ID'],
  wordId: Scalars['ID']
};


export type CompleteChatWordMutation = (
  { __typename?: 'Mutation' }
  & { completeChatWord: (
    { __typename?: 'Chat' }
    & Pick<Chat, '_id'>
  ) }
);

export type CreateChatMutationVariables = {
  name: Scalars['String'],
  wordIds: Array<Scalars['ID']>,
  topicIds?: Maybe<Array<Scalars['ID']>>
};


export type CreateChatMutation = (
  { __typename?: 'Mutation' }
  & { createChat: (
    { __typename?: 'Chat' }
    & Pick<Chat, '_id' | 'name'>
    & { words: Array<(
      { __typename?: 'Word' }
      & Pick<Word, '_id'>
    )>, topics: Array<(
      { __typename?: 'Topic' }
      & Pick<Topic, '_id'>
    )> }
  ) }
);

export type CreateTopicMutationVariables = {
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>
};


export type CreateTopicMutation = (
  { __typename?: 'Mutation' }
  & { createTopic: (
    { __typename?: 'Topic' }
    & Pick<Topic, '_id' | 'name' | 'description'>
  ) }
);

export type CreateWordMutationVariables = {
  phrase: Scalars['String'],
  translate?: Maybe<Scalars['String']>
};


export type CreateWordMutation = (
  { __typename?: 'Mutation' }
  & { createWord: (
    { __typename?: 'Word' }
    & Pick<Word, '_id' | 'translate' | 'phrase'>
  ) }
);

export type JoinChatMutationVariables = {
  inviteCode: Scalars['String']
};


export type JoinChatMutation = (
  { __typename?: 'Mutation' }
  & { joinChat: (
    { __typename?: 'Chat' }
    & Pick<Chat, '_id'>
  ) }
);

export type RemoveWordsFromChatMutationVariables = {
  _id: Scalars['ID'],
  wordIds: Array<Scalars['ID']>
};


export type RemoveWordsFromChatMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'removeWordsFromChat'>
);

export type StartChatMutationVariables = {
  _id: Scalars['ID']
};


export type StartChatMutation = (
  { __typename?: 'Mutation' }
  & { startChat: (
    { __typename?: 'Chat' }
    & Pick<Chat, '_id'>
  ) }
);

export type ChatQueryVariables = {
  _id: Scalars['String']
};


export type ChatQuery = (
  { __typename?: 'Query' }
  & { chat: Maybe<(
    { __typename?: 'Chat' }
    & Pick<Chat, '_id' | 'name' | 'isCompleted' | 'inviteCode' | 'userIds' | 'completedWordIds'>
    & { words: Array<(
      { __typename?: 'Word' }
      & Pick<Word, '_id' | 'phrase' | 'translate' | 'userId' | 'learned'>
    )>, topics: Array<(
      { __typename?: 'Topic' }
      & Pick<Topic, '_id' | 'name' | 'userId'>
    )>, started: Array<(
      { __typename?: 'StartedChat' }
      & Pick<StartedChat, 'date' | 'userId'>
      & { words: Array<(
        { __typename?: 'Word' }
        & Pick<Word, '_id' | 'phrase' | 'translate' | 'userId' | 'learned'>
      )> }
    )> }
  )> }
);

export type ChatsQueryVariables = {};


export type ChatsQuery = (
  { __typename?: 'Query' }
  & { chats: Array<(
    { __typename?: 'Chat' }
    & Pick<Chat, '_id' | 'name' | 'isCompleted'>
    & { words: Array<(
      { __typename?: 'Word' }
      & Pick<Word, '_id' | 'phrase' | 'translate' | 'userId' | 'learned'>
    )>, topics: Array<(
      { __typename?: 'Topic' }
      & Pick<Topic, '_id'>
    )> }
  )> }
);

export type TopicsQueryVariables = {};


export type TopicsQuery = (
  { __typename?: 'Query' }
  & { topics: Array<(
    { __typename?: 'Topic' }
    & Pick<Topic, '_id' | 'name' | 'description' | 'userId'>
  )> }
);

export type WordsQueryVariables = {};


export type WordsQuery = (
  { __typename?: 'Query' }
  & { words: Array<(
    { __typename?: 'Word' }
    & Pick<Word, '_id' | 'phrase' | 'translate' | 'userId' | 'learned'>
  )> }
);


export const AddWordsToChatDocument = gql`
    mutation addWordsToChat($_id: ID!, $wordIds: [ID!]!) {
  addWordsToChat(_id: $_id, wordIds: $wordIds)
}
    `;
export type AddWordsToChatMutationFn = ApolloReactCommon.MutationFunction<AddWordsToChatMutation, AddWordsToChatMutationVariables>;

/**
 * __useAddWordsToChatMutation__
 *
 * To run a mutation, you first call `useAddWordsToChatMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddWordsToChatMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addWordsToChatMutation, { data, loading, error }] = useAddWordsToChatMutation({
 *   variables: {
 *      _id: // value for '_id'
 *      wordIds: // value for 'wordIds'
 *   },
 * });
 */
export function useAddWordsToChatMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddWordsToChatMutation, AddWordsToChatMutationVariables>) {
        return ApolloReactHooks.useMutation<AddWordsToChatMutation, AddWordsToChatMutationVariables>(AddWordsToChatDocument, baseOptions);
      }
export type AddWordsToChatMutationHookResult = ReturnType<typeof useAddWordsToChatMutation>;
export type AddWordsToChatMutationResult = ApolloReactCommon.MutationResult<AddWordsToChatMutation>;
export type AddWordsToChatMutationOptions = ApolloReactCommon.BaseMutationOptions<AddWordsToChatMutation, AddWordsToChatMutationVariables>;
export const CompleteChatWordDocument = gql`
    mutation completeChatWord($_id: ID!, $wordId: ID!) {
  completeChatWord(_id: $_id, wordId: $wordId) {
    _id
  }
}
    `;
export type CompleteChatWordMutationFn = ApolloReactCommon.MutationFunction<CompleteChatWordMutation, CompleteChatWordMutationVariables>;

/**
 * __useCompleteChatWordMutation__
 *
 * To run a mutation, you first call `useCompleteChatWordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCompleteChatWordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [completeChatWordMutation, { data, loading, error }] = useCompleteChatWordMutation({
 *   variables: {
 *      _id: // value for '_id'
 *      wordId: // value for 'wordId'
 *   },
 * });
 */
export function useCompleteChatWordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CompleteChatWordMutation, CompleteChatWordMutationVariables>) {
        return ApolloReactHooks.useMutation<CompleteChatWordMutation, CompleteChatWordMutationVariables>(CompleteChatWordDocument, baseOptions);
      }
export type CompleteChatWordMutationHookResult = ReturnType<typeof useCompleteChatWordMutation>;
export type CompleteChatWordMutationResult = ApolloReactCommon.MutationResult<CompleteChatWordMutation>;
export type CompleteChatWordMutationOptions = ApolloReactCommon.BaseMutationOptions<CompleteChatWordMutation, CompleteChatWordMutationVariables>;
export const CreateChatDocument = gql`
    mutation createChat($name: String!, $wordIds: [ID!]!, $topicIds: [ID!]) {
  createChat(name: $name, wordIds: $wordIds, topicIds: $topicIds) {
    _id
    name
    words {
      _id
    }
    topics {
      _id
    }
  }
}
    `;
export type CreateChatMutationFn = ApolloReactCommon.MutationFunction<CreateChatMutation, CreateChatMutationVariables>;

/**
 * __useCreateChatMutation__
 *
 * To run a mutation, you first call `useCreateChatMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateChatMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createChatMutation, { data, loading, error }] = useCreateChatMutation({
 *   variables: {
 *      name: // value for 'name'
 *      wordIds: // value for 'wordIds'
 *      topicIds: // value for 'topicIds'
 *   },
 * });
 */
export function useCreateChatMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateChatMutation, CreateChatMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateChatMutation, CreateChatMutationVariables>(CreateChatDocument, baseOptions);
      }
export type CreateChatMutationHookResult = ReturnType<typeof useCreateChatMutation>;
export type CreateChatMutationResult = ApolloReactCommon.MutationResult<CreateChatMutation>;
export type CreateChatMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateChatMutation, CreateChatMutationVariables>;
export const CreateTopicDocument = gql`
    mutation createTopic($name: String!, $description: String) {
  createTopic(name: $name, description: $description) {
    _id
    name
    description
  }
}
    `;
export type CreateTopicMutationFn = ApolloReactCommon.MutationFunction<CreateTopicMutation, CreateTopicMutationVariables>;

/**
 * __useCreateTopicMutation__
 *
 * To run a mutation, you first call `useCreateTopicMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTopicMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTopicMutation, { data, loading, error }] = useCreateTopicMutation({
 *   variables: {
 *      name: // value for 'name'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useCreateTopicMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateTopicMutation, CreateTopicMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateTopicMutation, CreateTopicMutationVariables>(CreateTopicDocument, baseOptions);
      }
export type CreateTopicMutationHookResult = ReturnType<typeof useCreateTopicMutation>;
export type CreateTopicMutationResult = ApolloReactCommon.MutationResult<CreateTopicMutation>;
export type CreateTopicMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateTopicMutation, CreateTopicMutationVariables>;
export const CreateWordDocument = gql`
    mutation createWord($phrase: String!, $translate: String) {
  createWord(phrase: $phrase, translate: $translate) {
    _id
    translate
    phrase
  }
}
    `;
export type CreateWordMutationFn = ApolloReactCommon.MutationFunction<CreateWordMutation, CreateWordMutationVariables>;

/**
 * __useCreateWordMutation__
 *
 * To run a mutation, you first call `useCreateWordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWordMutation, { data, loading, error }] = useCreateWordMutation({
 *   variables: {
 *      phrase: // value for 'phrase'
 *      translate: // value for 'translate'
 *   },
 * });
 */
export function useCreateWordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateWordMutation, CreateWordMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateWordMutation, CreateWordMutationVariables>(CreateWordDocument, baseOptions);
      }
export type CreateWordMutationHookResult = ReturnType<typeof useCreateWordMutation>;
export type CreateWordMutationResult = ApolloReactCommon.MutationResult<CreateWordMutation>;
export type CreateWordMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateWordMutation, CreateWordMutationVariables>;
export const JoinChatDocument = gql`
    mutation joinChat($inviteCode: String!) {
  joinChat(inviteCode: $inviteCode) {
    _id
  }
}
    `;
export type JoinChatMutationFn = ApolloReactCommon.MutationFunction<JoinChatMutation, JoinChatMutationVariables>;

/**
 * __useJoinChatMutation__
 *
 * To run a mutation, you first call `useJoinChatMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJoinChatMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [joinChatMutation, { data, loading, error }] = useJoinChatMutation({
 *   variables: {
 *      inviteCode: // value for 'inviteCode'
 *   },
 * });
 */
export function useJoinChatMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<JoinChatMutation, JoinChatMutationVariables>) {
        return ApolloReactHooks.useMutation<JoinChatMutation, JoinChatMutationVariables>(JoinChatDocument, baseOptions);
      }
export type JoinChatMutationHookResult = ReturnType<typeof useJoinChatMutation>;
export type JoinChatMutationResult = ApolloReactCommon.MutationResult<JoinChatMutation>;
export type JoinChatMutationOptions = ApolloReactCommon.BaseMutationOptions<JoinChatMutation, JoinChatMutationVariables>;
export const RemoveWordsFromChatDocument = gql`
    mutation removeWordsFromChat($_id: ID!, $wordIds: [ID!]!) {
  removeWordsFromChat(_id: $_id, wordIds: $wordIds)
}
    `;
export type RemoveWordsFromChatMutationFn = ApolloReactCommon.MutationFunction<RemoveWordsFromChatMutation, RemoveWordsFromChatMutationVariables>;

/**
 * __useRemoveWordsFromChatMutation__
 *
 * To run a mutation, you first call `useRemoveWordsFromChatMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveWordsFromChatMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeWordsFromChatMutation, { data, loading, error }] = useRemoveWordsFromChatMutation({
 *   variables: {
 *      _id: // value for '_id'
 *      wordIds: // value for 'wordIds'
 *   },
 * });
 */
export function useRemoveWordsFromChatMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveWordsFromChatMutation, RemoveWordsFromChatMutationVariables>) {
        return ApolloReactHooks.useMutation<RemoveWordsFromChatMutation, RemoveWordsFromChatMutationVariables>(RemoveWordsFromChatDocument, baseOptions);
      }
export type RemoveWordsFromChatMutationHookResult = ReturnType<typeof useRemoveWordsFromChatMutation>;
export type RemoveWordsFromChatMutationResult = ApolloReactCommon.MutationResult<RemoveWordsFromChatMutation>;
export type RemoveWordsFromChatMutationOptions = ApolloReactCommon.BaseMutationOptions<RemoveWordsFromChatMutation, RemoveWordsFromChatMutationVariables>;
export const StartChatDocument = gql`
    mutation startChat($_id: ID!) {
  startChat(_id: $_id) {
    _id
  }
}
    `;
export type StartChatMutationFn = ApolloReactCommon.MutationFunction<StartChatMutation, StartChatMutationVariables>;

/**
 * __useStartChatMutation__
 *
 * To run a mutation, you first call `useStartChatMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStartChatMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [startChatMutation, { data, loading, error }] = useStartChatMutation({
 *   variables: {
 *      _id: // value for '_id'
 *   },
 * });
 */
export function useStartChatMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<StartChatMutation, StartChatMutationVariables>) {
        return ApolloReactHooks.useMutation<StartChatMutation, StartChatMutationVariables>(StartChatDocument, baseOptions);
      }
export type StartChatMutationHookResult = ReturnType<typeof useStartChatMutation>;
export type StartChatMutationResult = ApolloReactCommon.MutationResult<StartChatMutation>;
export type StartChatMutationOptions = ApolloReactCommon.BaseMutationOptions<StartChatMutation, StartChatMutationVariables>;
export const ChatDocument = gql`
    query chat($_id: String!) {
  chat(_id: $_id) {
    _id
    name
    isCompleted
    words {
      _id
      phrase
      translate
      userId
      learned
    }
    topics {
      _id
      name
      userId
    }
    inviteCode
    started {
      date
      userId
      words {
        _id
        phrase
        translate
        userId
        learned
      }
    }
    userIds
    completedWordIds
  }
}
    `;

/**
 * __useChatQuery__
 *
 * To run a query within a React component, call `useChatQuery` and pass it any options that fit your needs.
 * When your component renders, `useChatQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChatQuery({
 *   variables: {
 *      _id: // value for '_id'
 *   },
 * });
 */
export function useChatQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ChatQuery, ChatQueryVariables>) {
        return ApolloReactHooks.useQuery<ChatQuery, ChatQueryVariables>(ChatDocument, baseOptions);
      }
export function useChatLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ChatQuery, ChatQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ChatQuery, ChatQueryVariables>(ChatDocument, baseOptions);
        }
export type ChatQueryHookResult = ReturnType<typeof useChatQuery>;
export type ChatLazyQueryHookResult = ReturnType<typeof useChatLazyQuery>;
export type ChatQueryResult = ApolloReactCommon.QueryResult<ChatQuery, ChatQueryVariables>;
export const ChatsDocument = gql`
    query chats {
  chats {
    _id
    name
    isCompleted
    words {
      _id
      phrase
      translate
      userId
      learned
    }
    topics {
      _id
    }
  }
}
    `;

/**
 * __useChatsQuery__
 *
 * To run a query within a React component, call `useChatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useChatsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChatsQuery({
 *   variables: {
 *   },
 * });
 */
export function useChatsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ChatsQuery, ChatsQueryVariables>) {
        return ApolloReactHooks.useQuery<ChatsQuery, ChatsQueryVariables>(ChatsDocument, baseOptions);
      }
export function useChatsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ChatsQuery, ChatsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ChatsQuery, ChatsQueryVariables>(ChatsDocument, baseOptions);
        }
export type ChatsQueryHookResult = ReturnType<typeof useChatsQuery>;
export type ChatsLazyQueryHookResult = ReturnType<typeof useChatsLazyQuery>;
export type ChatsQueryResult = ApolloReactCommon.QueryResult<ChatsQuery, ChatsQueryVariables>;
export const TopicsDocument = gql`
    query topics {
  topics {
    _id
    name
    description
    userId
  }
}
    `;

/**
 * __useTopicsQuery__
 *
 * To run a query within a React component, call `useTopicsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTopicsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTopicsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTopicsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TopicsQuery, TopicsQueryVariables>) {
        return ApolloReactHooks.useQuery<TopicsQuery, TopicsQueryVariables>(TopicsDocument, baseOptions);
      }
export function useTopicsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TopicsQuery, TopicsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TopicsQuery, TopicsQueryVariables>(TopicsDocument, baseOptions);
        }
export type TopicsQueryHookResult = ReturnType<typeof useTopicsQuery>;
export type TopicsLazyQueryHookResult = ReturnType<typeof useTopicsLazyQuery>;
export type TopicsQueryResult = ApolloReactCommon.QueryResult<TopicsQuery, TopicsQueryVariables>;
export const WordsDocument = gql`
    query words {
  words {
    _id
    phrase
    translate
    userId
    learned
  }
}
    `;

/**
 * __useWordsQuery__
 *
 * To run a query within a React component, call `useWordsQuery` and pass it any options that fit your needs.
 * When your component renders, `useWordsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWordsQuery({
 *   variables: {
 *   },
 * });
 */
export function useWordsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<WordsQuery, WordsQueryVariables>) {
        return ApolloReactHooks.useQuery<WordsQuery, WordsQueryVariables>(WordsDocument, baseOptions);
      }
export function useWordsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<WordsQuery, WordsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<WordsQuery, WordsQueryVariables>(WordsDocument, baseOptions);
        }
export type WordsQueryHookResult = ReturnType<typeof useWordsQuery>;
export type WordsLazyQueryHookResult = ReturnType<typeof useWordsLazyQuery>;
export type WordsQueryResult = ApolloReactCommon.QueryResult<WordsQuery, WordsQueryVariables>;