import { request } from 'graphql-request';

export default (query: string) => request(`${process.env.HASURA_GRAPHQL_HTTP_ENDPOINT}`, query);
