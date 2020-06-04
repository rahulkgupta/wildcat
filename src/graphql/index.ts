import { ApolloServer } from 'apollo-server-micro';
import resolvers from '@src/graphql/resolvers';
import typeDefs from '@src/graphql/schema';

export default new ApolloServer({ typeDefs, resolvers });
