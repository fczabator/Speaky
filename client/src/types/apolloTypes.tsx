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
};

export type Chat = {
   __typename?: 'Chat',
  _id: Scalars['ID'],
  name: Scalars['String'],
  wordIds: Array<Scalars['ID']>,
  words: Array<Word>,
  topics?: Maybe<Array<Topic>>,
  topicIds: Array<Scalars['ID']>,
  userIds: Array<Scalars['ID']>,
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
  createTopic: Topic,
};


export type MutationCreateWordArgs = {
  word: Scalars['String'],
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


export type MutationCreateTopicArgs = {
  name: Scalars['String']
};

export type Query = {
   __typename?: 'Query',
  _empty?: Maybe<Scalars['String']>,
  words: Array<Word>,
  word?: Maybe<Word>,
  chats: Array<Chat>,
  chat?: Maybe<Chat>,
  topics: Array<Topic>,
};


export type QueryWordArgs = {
  _id: Scalars['String']
};


export type QueryChatArgs = {
  _id: Scalars['String']
};

export type Topic = {
   __typename?: 'Topic',
  _id: Scalars['ID'],
  name: Scalars['String'],
};

export type Word = {
   __typename?: 'Word',
  _id: Scalars['ID'],
  word: Scalars['String'],
  translate?: Maybe<Scalars['String']>,
  userId: Scalars['ID'],
};

export type AddWordsToChatMutationVariables = {
  _id: Scalars['ID'],
  wordIds: Array<Scalars['ID']>
};


export type AddWordsToChatMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'addWordsToChat'>
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
    )>, topics: Maybe<Array<(
      { __typename?: 'Topic' }
      & Pick<Topic, '_id'>
    )>> }
  ) }
);

export type CreateWordMutationVariables = {
  word: Scalars['String'],
  translate?: Maybe<Scalars['String']>
};


export type CreateWordMutation = (
  { __typename?: 'Mutation' }
  & { createWord: (
    { __typename?: 'Word' }
    & Pick<Word, '_id' | 'translate' | 'word'>
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

export type ChatQueryVariables = {
  _id: Scalars['String']
};


export type ChatQuery = (
  { __typename?: 'Query' }
  & { chat: Maybe<(
    { __typename?: 'Chat' }
    & Pick<Chat, '_id' | 'name'>
    & { words: Array<(
      { __typename?: 'Word' }
      & Pick<Word, '_id' | 'word' | 'translate' | 'userId'>
    )>, topics: Maybe<Array<(
      { __typename?: 'Topic' }
      & Pick<Topic, '_id'>
    )>> }
  )> }
);

export type ChatsQueryVariables = {};


export type ChatsQuery = (
  { __typename?: 'Query' }
  & { chats: Array<(
    { __typename?: 'Chat' }
    & Pick<Chat, '_id' | 'name'>
    & { words: Array<(
      { __typename?: 'Word' }
      & Pick<Word, '_id' | 'word' | 'translate' | 'userId'>
    )>, topics: Maybe<Array<(
      { __typename?: 'Topic' }
      & Pick<Topic, '_id'>
    )>> }
  )> }
);

export type WordsQueryVariables = {};


export type WordsQuery = (
  { __typename?: 'Query' }
  & { words: Array<(
    { __typename?: 'Word' }
    & Pick<Word, '_id' | 'word' | 'translate' | 'userId'>
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
export const CreateWordDocument = gql`
    mutation createWord($word: String!, $translate: String) {
  createWord(word: $word, translate: $translate) {
    _id
    translate
    word
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
 *      word: // value for 'word'
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
export const ChatDocument = gql`
    query chat($_id: String!) {
  chat(_id: $_id) {
    _id
    name
    words {
      _id
      word
      translate
      userId
    }
    topics {
      _id
    }
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
    words {
      _id
      word
      translate
      userId
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
export const WordsDocument = gql`
    query words {
  words {
    _id
    word
    translate
    userId
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