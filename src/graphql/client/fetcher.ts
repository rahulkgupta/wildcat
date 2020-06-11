import { request } from 'graphql-request';

export default (query: string, variables: any = {}) =>
  request(`${process.env.HASURA_GRAPHQL_HTTP_ENDPOINT}`, query, variables);
