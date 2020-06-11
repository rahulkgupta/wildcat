import { request } from 'graphql-request';

export const getQuery = (id: string) => {
  return `{
    forms_by_pk(id: "${id}") {
      data,
      id
    }
  }`;
};

const fetcher = (query: string) => request(`${process.env.HASURA_GRAPHQL_HTTP_ENDPOINT}`, query);

export default fetcher;
