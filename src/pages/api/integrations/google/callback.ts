import { NextApiRequest, NextApiResponse } from 'next';
import oauth2Client from '@src/util/integrations/google/auth';
import fetcher from '@src/graphql/client/fetcher';
import addIntegration from '@src/graphql/client/addIntegration';

// TODO: handle errors
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { tokens } = await oauth2Client.getToken(req.query.code as string);
  await fetcher(addIntegration(tokens, 'google'));
  res.writeHead(302, {
    Location: '/',
  });
  res.end();
};
