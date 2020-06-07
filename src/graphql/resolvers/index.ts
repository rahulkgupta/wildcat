import { Resolvers } from '@src/graphql/sdk';
import form from './query/form';

const resolvers: Resolvers = {
  Query: {
    form: form,
  },
};

export default resolvers;
