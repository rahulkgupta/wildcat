import { GraphQLClient } from 'graphql-request';

const graphQLClient = new GraphQLClient(`${process.env.HASURA_GRAPHQL_HTTP_ENDPOINT}`, {
  headers: {},
});

export default (query: string, accessToken?: string): Promise<any> => {
  if (accessToken) {
    graphQLClient.setHeader('Authorization', `Bearer ${accessToken}`);
  }
  return graphQLClient.request(query);
};
