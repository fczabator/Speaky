import { GraphQLResolveInfo } from 'graphql';
import { Context } from '../context';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
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
  createChat?: Maybe<Chat>,
  createTopic?: Maybe<Topic>,
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


export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

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

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Word: ResolverTypeWrapper<Word>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  Chat: ResolverTypeWrapper<Chat>,
  Topic: ResolverTypeWrapper<Topic>,
  Mutation: ResolverTypeWrapper<{}>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  String: Scalars['String'],
  Word: Word,
  ID: Scalars['ID'],
  Chat: Chat,
  Topic: Topic,
  Mutation: {},
  Boolean: Scalars['Boolean'],
};

export type ChatResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Chat'] = ResolversParentTypes['Chat']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  words?: Resolver<Array<ResolversTypes['Word']>, ParentType, ContextType>,
  topics?: Resolver<Array<ResolversTypes['Topic']>, ParentType, ContextType>,
};

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  createWord?: Resolver<ResolversTypes['Word'], ParentType, ContextType, RequireFields<MutationCreateWordArgs, 'word' | 'translate'>>,
  createChat?: Resolver<Maybe<ResolversTypes['Chat']>, ParentType, ContextType, RequireFields<MutationCreateChatArgs, 'name' | 'wordIds' | 'topicIds'>>,
  createTopic?: Resolver<Maybe<ResolversTypes['Topic']>, ParentType, ContextType, RequireFields<MutationCreateTopicArgs, 'name'>>,
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  words?: Resolver<Array<ResolversTypes['Word']>, ParentType, ContextType>,
  chats?: Resolver<Array<ResolversTypes['Chat']>, ParentType, ContextType>,
  topics?: Resolver<Array<ResolversTypes['Topic']>, ParentType, ContextType>,
};

export type TopicResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Topic'] = ResolversParentTypes['Topic']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type WordResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Word'] = ResolversParentTypes['Word']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  word?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  translate?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type Resolvers<ContextType = Context> = {
  Chat?: ChatResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  Topic?: TopicResolvers<ContextType>,
  Word?: WordResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = Context> = Resolvers<ContextType>;
