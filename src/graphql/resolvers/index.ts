import { getFormByID } from '@src/db/datastore';
import { Resolvers, QueryResolvers } from '@src/graphql/sdk';

const resolvers: Resolvers = {
  Query: {
    form: (parent, args, context, info) => {
      return getFormByID(args.id);
    },
  },
};

export default resolvers;
