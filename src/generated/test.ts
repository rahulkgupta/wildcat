import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  Long: any;
  Time: any;
};







export type AccessToken = {
  __typename?: 'AccessToken';
  access_token?: Maybe<Scalars['String']>;
  _id: Scalars['ID'];
  refresh_token?: Maybe<Scalars['String']>;
  token_type?: Maybe<Scalars['String']>;
  service?: Maybe<Scalars['String']>;
  expiry_date?: Maybe<Scalars['Float']>;
  _ts: Scalars['Long'];
};

export type AccessTokenInput = {
  access_token?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  expiry_date?: Maybe<Scalars['Float']>;
  token_type?: Maybe<Scalars['String']>;
  service?: Maybe<Scalars['String']>;
};



export type Mutation = {
  __typename?: 'Mutation';
  createAccessToken: AccessToken;
  updateAccessToken?: Maybe<AccessToken>;
  deleteAccessToken?: Maybe<AccessToken>;
};


export type MutationCreateAccessTokenArgs = {
  data: AccessTokenInput;
};


export type MutationUpdateAccessTokenArgs = {
  id: Scalars['ID'];
  data: AccessTokenInput;
};


export type MutationDeleteAccessTokenArgs = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  findAccessTokenByID?: Maybe<AccessToken>;
  findAccessTokenByService?: Maybe<AccessToken>;
};


export type QueryFindAccessTokenByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindAccessTokenByServiceArgs = {
  service?: Maybe<Scalars['String']>;
};


export type FindAccessTokenByServiceQueryVariables = {
  service: Scalars['String'];
};


export type FindAccessTokenByServiceQuery = (
  { __typename?: 'Query' }
  & { findAccessTokenByService?: Maybe<(
    { __typename?: 'AccessToken' }
    & CredentialOutputFragment
  )> }
);

export type FindAccessTokenByIdQueryVariables = {
  id: Scalars['ID'];
};


export type FindAccessTokenByIdQuery = (
  { __typename?: 'Query' }
  & { findAccessTokenByID?: Maybe<(
    { __typename?: 'AccessToken' }
    & CredentialOutputFragment
  )> }
);

export type CreateAccessTokenMutationVariables = {
  data: AccessTokenInput;
};


export type CreateAccessTokenMutation = (
  { __typename?: 'Mutation' }
  & { createAccessToken: (
    { __typename?: 'AccessToken' }
    & CredentialOutputFragment
  ) }
);

export type UpdateAccessTokenMutationVariables = {
  id: Scalars['ID'];
  data: AccessTokenInput;
};


export type UpdateAccessTokenMutation = (
  { __typename?: 'Mutation' }
  & { updateAccessToken?: Maybe<(
    { __typename?: 'AccessToken' }
    & CredentialOutputFragment
  )> }
);

export type CredentialOutputFragment = (
  { __typename?: 'AccessToken' }
  & Pick<AccessToken, 'access_token' | 'refresh_token' | 'expiry_date' | 'token_type' | 'service' | '_id'>
);



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

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
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

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
  String: ResolverTypeWrapper<Scalars['String']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  AccessToken: ResolverTypeWrapper<AccessToken>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  AccessTokenInput: AccessTokenInput;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Long: ResolverTypeWrapper<Scalars['Long']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Time: ResolverTypeWrapper<Scalars['Time']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  String: Scalars['String'];
  Boolean: Scalars['Boolean'];
  AccessToken: AccessToken;
  ID: Scalars['ID'];
  Float: Scalars['Float'];
  AccessTokenInput: AccessTokenInput;
  Date: Scalars['Date'];
  Long: Scalars['Long'];
  Mutation: {};
  Query: {};
  Time: Scalars['Time'];
};

export type EmbeddedDirectiveArgs = {  };

export type EmbeddedDirectiveResolver<Result, Parent, ContextType = any, Args = EmbeddedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type CollectionDirectiveArgs = {   name: Scalars['String']; };

export type CollectionDirectiveResolver<Result, Parent, ContextType = any, Args = CollectionDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IndexDirectiveArgs = {   name: Scalars['String']; };

export type IndexDirectiveResolver<Result, Parent, ContextType = any, Args = IndexDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ResolverDirectiveArgs = {   name?: Maybe<Scalars['String']>;
  paginated?: Scalars['Boolean']; };

export type ResolverDirectiveResolver<Result, Parent, ContextType = any, Args = ResolverDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type RelationDirectiveArgs = {   name?: Maybe<Scalars['String']>; };

export type RelationDirectiveResolver<Result, Parent, ContextType = any, Args = RelationDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type UniqueDirectiveArgs = {   index?: Maybe<Scalars['String']>; };

export type UniqueDirectiveResolver<Result, Parent, ContextType = any, Args = UniqueDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AccessTokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccessToken'] = ResolversParentTypes['AccessToken']> = {
  access_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  refresh_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  service?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expiry_date?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  _ts?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface LongScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Long'], any> {
  name: 'Long';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createAccessToken?: Resolver<ResolversTypes['AccessToken'], ParentType, ContextType, RequireFields<MutationCreateAccessTokenArgs, 'data'>>;
  updateAccessToken?: Resolver<Maybe<ResolversTypes['AccessToken']>, ParentType, ContextType, RequireFields<MutationUpdateAccessTokenArgs, 'id' | 'data'>>;
  deleteAccessToken?: Resolver<Maybe<ResolversTypes['AccessToken']>, ParentType, ContextType, RequireFields<MutationDeleteAccessTokenArgs, 'id'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  findAccessTokenByID?: Resolver<Maybe<ResolversTypes['AccessToken']>, ParentType, ContextType, RequireFields<QueryFindAccessTokenByIdArgs, 'id'>>;
  findAccessTokenByService?: Resolver<Maybe<ResolversTypes['AccessToken']>, ParentType, ContextType, RequireFields<QueryFindAccessTokenByServiceArgs, never>>;
};

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time';
}

export type Resolvers<ContextType = any> = {
  AccessToken?: AccessTokenResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Long?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Time?: GraphQLScalarType;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = {
  embedded?: EmbeddedDirectiveResolver<any, any, ContextType>;
  collection?: CollectionDirectiveResolver<any, any, ContextType>;
  index?: IndexDirectiveResolver<any, any, ContextType>;
  resolver?: ResolverDirectiveResolver<any, any, ContextType>;
  relation?: RelationDirectiveResolver<any, any, ContextType>;
  unique?: UniqueDirectiveResolver<any, any, ContextType>;
};


/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<ContextType>;
export const CredentialOutputFragmentDoc = gql`
    fragment credentialOutput on AccessToken {
  access_token
  refresh_token
  expiry_date
  token_type
  service
  _id
}
    `;
export const FindAccessTokenByServiceDocument = gql`
    query findAccessTokenByService($service: String!) {
  findAccessTokenByService(service: $service) {
    ...credentialOutput
  }
}
    ${CredentialOutputFragmentDoc}`;
export const FindAccessTokenByIdDocument = gql`
    query findAccessTokenByID($id: ID!) {
  findAccessTokenByID(id: $id) {
    ...credentialOutput
  }
}
    ${CredentialOutputFragmentDoc}`;
export const CreateAccessTokenDocument = gql`
    mutation createAccessToken($data: AccessTokenInput!) {
  createAccessToken(data: $data) {
    ...credentialOutput
  }
}
    ${CredentialOutputFragmentDoc}`;
export const UpdateAccessTokenDocument = gql`
    mutation updateAccessToken($id: ID!, $data: AccessTokenInput!) {
  updateAccessToken(id: $id, data: $data) {
    ...credentialOutput
  }
}
    ${CredentialOutputFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    findAccessTokenByService(variables: FindAccessTokenByServiceQueryVariables): Promise<FindAccessTokenByServiceQuery> {
      return withWrapper(() => client.request<FindAccessTokenByServiceQuery>(print(FindAccessTokenByServiceDocument), variables));
    },
    findAccessTokenByID(variables: FindAccessTokenByIdQueryVariables): Promise<FindAccessTokenByIdQuery> {
      return withWrapper(() => client.request<FindAccessTokenByIdQuery>(print(FindAccessTokenByIdDocument), variables));
    },
    createAccessToken(variables: CreateAccessTokenMutationVariables): Promise<CreateAccessTokenMutation> {
      return withWrapper(() => client.request<CreateAccessTokenMutation>(print(CreateAccessTokenDocument), variables));
    },
    updateAccessToken(variables: UpdateAccessTokenMutationVariables): Promise<UpdateAccessTokenMutation> {
      return withWrapper(() => client.request<UpdateAccessTokenMutation>(print(UpdateAccessTokenDocument), variables));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;