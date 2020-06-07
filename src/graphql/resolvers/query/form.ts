import { getFormByID } from '@src/db/datastore';
import { QueryResolvers } from '@src/graphql/sdk';

const Query: QueryResolvers = {
  form: (parent, args, context, info) => {
    return getFormByID(args.id);
  },
};

export default Query.form;
