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
  words: Array<Word>,
  topics: Array<Topic>,
};

export type Mutation = {
   __typename?: 'Mutation',
  _empty?: Maybe<Scalars['String']>,
  createWord: Word,
  createChat: Chat,
  createTopic: Topic,
};


export type MutationCreateWordArgs = {
  word: Scalars['String'],
  translate: Scalars['String']
};


export type MutationCreateChatArgs = {
  name: Scalars['String'],
  wordIds: Array<Scalars['String']>,
  topicIds: Array<Scalars['String']>
};


export type MutationCreateTopicArgs = {
  name: Scalars['String']
};

export type Query = {
   __typename?: 'Query',
  _empty?: Maybe<Scalars['String']>,
  words: Array<Word>,
  chats: Array<Chat>,
  topics: Array<Topic>,
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
  translate: Scalars['String'],
};

export type WordsQueryVariables = {};


export type WordsQuery = (
  { __typename?: 'Query' }
  & { words: Array<(
    { __typename?: 'Word' }
    & Pick<Word, '_id' | 'word' | 'translate'>
  )> }
);

export type CreateWordMutationVariables = {
  word: Scalars['String'],
  translate: Scalars['String']
};


export type CreateWordMutation = (
  { __typename?: 'Mutation' }
  & { createWord: (
    { __typename?: 'Word' }
    & Pick<Word, '_id' | 'translate' | 'word'>
  ) }
);

export type Unnamed_1_QueryVariables = {};


export type Unnamed_1_Query = (
  { __typename?: 'Query' }
  & { words: Array<(
    { __typename?: 'Word' }
    & Pick<Word, 'word' | '_id' | 'translate'>
  )> }
);


export const WordsDocument = gql`
    query words {
  words {
    _id
    word
    translate
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
export const CreateWordDocument = gql`
    mutation createWord($word: String!, $translate: String!) {
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