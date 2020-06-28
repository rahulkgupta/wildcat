import { NextApiRequest, NextApiResponse } from 'next';
import oauth2Client from '@src/util/integrations/google/auth';
import fetcher from '@src/graphql/client/fetcher';
import addIntegration from '@src/graphql/client/addIntegration';
import auth0 from '@src/util/auth0';

// TODO: handle errors
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { tokens } = await oauth2Client.getToken(req.query.code as string);
  const tokenCache = await auth0.tokenCache(req, res);
  const { accessToken } = await tokenCache.getAccessToken();
  const response = await fetcher(addIntegration(tokens, 'google'), accessToken);
  res.writeHead(302, {
    Location: '/',
  });
  res.end();
};
