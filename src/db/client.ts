import { GraphQLClient } from 'graphql-request';
import { getSdk } from '@src/db/sdk';

console.log('hello world ${process.env.FAUNADB_SECRET}');
const graphQLClient = new GraphQLClient(process.env.GRAPHQL_ENDPOINT || '', {
  headers: {
    authorization: `Bearer ${process.env.FAUNADB_SECRET}`,
  },
});

const sdk = getSdk(graphQLClient);

export default sdk;
