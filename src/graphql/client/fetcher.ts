import { GraphQLClient } from 'graphql-request';

export const graphQLClient = new GraphQLClient(`${process.env.HASURA_GRAPHQL_HTTP_ENDPOINT}`, {
  headers: {},
});

export default (query: string) => graphQLClient.request(query);
