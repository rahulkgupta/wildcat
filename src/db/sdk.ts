import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
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