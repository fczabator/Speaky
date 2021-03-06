import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig
} from 'graphql';
import { ChatParent, StartedChatParent } from './types';
import { Context } from '../context';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} &
  { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Use JavaScript Date object for date/time fields. */
  DateTime: any;
};

export type Chat = {
  __typename?: 'Chat';
  _id: Scalars['ID'];
  name: Scalars['String'];
  words: Array<Word>;
  topics?: Maybe<Array<Topic>>;
  userIds: Array<Scalars['ID']>;
  inviteCode: Scalars['String'];
  started: Array<StartedChat>;
  completedWordIds: Array<Scalars['String']>;
  isCompleted: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['String']>;
  createWord: Word;
  deleteWord: Scalars['Boolean'];
  createChat: Chat;
  addWordsToChat: Scalars['Boolean'];
  removeWordsFromChat: Scalars['Boolean'];
  inviteUserToChat: Scalars['Boolean'];
  joinChat: Chat;
  startChat: Chat;
  completeChatWord: Chat;
  createTopic: Topic;
};

export type MutationCreateWordArgs = {
  phrase: Scalars['String'];
  translate?: Maybe<Scalars['String']>;
};

export type MutationDeleteWordArgs = {
  _id: Scalars['String'];
};

export type MutationCreateChatArgs = {
  name: Scalars['String'];
  wordIds: Array<Scalars['ID']>;
  topicIds?: Maybe<Array<Scalars['ID']>>;
};

export type MutationAddWordsToChatArgs = {
  _id: Scalars['ID'];
  wordIds: Array<Scalars['ID']>;
};

export type MutationRemoveWordsFromChatArgs = {
  _id: Scalars['ID'];
  wordIds: Array<Scalars['ID']>;
};

export type MutationInviteUserToChatArgs = {
  _id: Scalars['ID'];
  userId: Scalars['ID'];
};

export type MutationJoinChatArgs = {
  inviteCode: Scalars['String'];
};

export type MutationStartChatArgs = {
  _id: Scalars['ID'];
};

export type MutationCompleteChatWordArgs = {
  _id: Scalars['ID'];
  wordId: Scalars['ID'];
};

export type MutationCreateTopicArgs = {
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['String']>;
  words: Array<Word>;
  word?: Maybe<Word>;
  chats: Array<Chat>;
  chat?: Maybe<Chat>;
  topics: Array<Topic>;
};

export type QueryWordArgs = {
  _id: Scalars['String'];
};

export type QueryChatArgs = {
  _id: Scalars['String'];
};

export type StartedChat = {
  __typename?: 'StartedChat';
  date?: Maybe<Scalars['DateTime']>;
  userId: Scalars['ID'];
  words: Array<Word>;
};

export type Topic = {
  __typename?: 'Topic';
  _id: Scalars['ID'];
  name: Scalars['String'];
};

export type Word = {
  __typename?: 'Word';
  _id: Scalars['ID'];
  learned?: Maybe<Scalars['Boolean']>;
  translate?: Maybe<Scalars['String']>;
  userId: Scalars['ID'];
  phrase: Scalars['String'];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type Resolver<
  TResult,
  TParent = {},
  TContext = {},
  TArgs = {}
> = ResolverFn<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Word: ResolverTypeWrapper<Word>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Chat: ResolverTypeWrapper<ChatParent>;
  Topic: ResolverTypeWrapper<Topic>;
  StartedChat: ResolverTypeWrapper<StartedChatParent>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Mutation: ResolverTypeWrapper<{}>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  String: Scalars['String'];
  Word: Word;
  ID: Scalars['ID'];
  Boolean: Scalars['Boolean'];
  Chat: ChatParent;
  Topic: Topic;
  StartedChat: StartedChatParent;
  DateTime: Scalars['DateTime'];
  Mutation: {};
};

export type ChatResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Chat'] = ResolversParentTypes['Chat']
> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  words?: Resolver<Array<ResolversTypes['Word']>, ParentType, ContextType>;
  topics?: Resolver<
    Maybe<Array<ResolversTypes['Topic']>>,
    ParentType,
    ContextType
  >;
  userIds?: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  inviteCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  started?: Resolver<
    Array<ResolversTypes['StartedChat']>,
    ParentType,
    ContextType
  >;
  completedWordIds?: Resolver<
    Array<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  isCompleted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
};

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type MutationResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createWord?: Resolver<
    ResolversTypes['Word'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateWordArgs, 'phrase'>
  >;
  deleteWord?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteWordArgs, '_id'>
  >;
  createChat?: Resolver<
    ResolversTypes['Chat'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateChatArgs, 'name' | 'wordIds'>
  >;
  addWordsToChat?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationAddWordsToChatArgs, '_id' | 'wordIds'>
  >;
  removeWordsFromChat?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationRemoveWordsFromChatArgs, '_id' | 'wordIds'>
  >;
  inviteUserToChat?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationInviteUserToChatArgs, '_id' | 'userId'>
  >;
  joinChat?: Resolver<
    ResolversTypes['Chat'],
    ParentType,
    ContextType,
    RequireFields<MutationJoinChatArgs, 'inviteCode'>
  >;
  startChat?: Resolver<
    ResolversTypes['Chat'],
    ParentType,
    ContextType,
    RequireFields<MutationStartChatArgs, '_id'>
  >;
  completeChatWord?: Resolver<
    ResolversTypes['Chat'],
    ParentType,
    ContextType,
    RequireFields<MutationCompleteChatWordArgs, '_id' | 'wordId'>
  >;
  createTopic?: Resolver<
    ResolversTypes['Topic'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateTopicArgs, 'name'>
  >;
};

export type QueryResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  words?: Resolver<Array<ResolversTypes['Word']>, ParentType, ContextType>;
  word?: Resolver<
    Maybe<ResolversTypes['Word']>,
    ParentType,
    ContextType,
    RequireFields<QueryWordArgs, '_id'>
  >;
  chats?: Resolver<Array<ResolversTypes['Chat']>, ParentType, ContextType>;
  chat?: Resolver<
    Maybe<ResolversTypes['Chat']>,
    ParentType,
    ContextType,
    RequireFields<QueryChatArgs, '_id'>
  >;
  topics?: Resolver<Array<ResolversTypes['Topic']>, ParentType, ContextType>;
};

export type StartedChatResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['StartedChat'] = ResolversParentTypes['StartedChat']
> = {
  date?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  words?: Resolver<Array<ResolversTypes['Word']>, ParentType, ContextType>;
};

export type TopicResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Topic'] = ResolversParentTypes['Topic']
> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type WordResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Word'] = ResolversParentTypes['Word']
> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  learned?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  translate?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  phrase?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
  Chat?: ChatResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  StartedChat?: StartedChatResolvers<ContextType>;
  Topic?: TopicResolvers<ContextType>;
  Word?: WordResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = Context> = Resolvers<ContextType>;
