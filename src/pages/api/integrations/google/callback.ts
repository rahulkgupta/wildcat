import { NextApiRequest, NextApiResponse } from 'next';
import oauth2Client from '@src/util/integrations/google/auth';
import fetcher, { graphQLClient } from '@src/graphql/client/fetcher';
import addIntegration from '@src/graphql/client/addIntegration';
import auth0 from '@src/util/auth0';

// TODO: handle errors
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { tokens } = await oauth2Client.getToken(req.query.code as string);
  const tokenCache = await auth0.tokenCache(req, res);
  const { accessToken } = await tokenCache.getAccessToken();
  console.log(accessToken);
  graphQLClient.setHeader('Authorization', `Bearer ${accessToken}`);
  const response = await fetcher(addIntegration(tokens, 'google'));
  console.log(response);
  res.writeHead(302, {
    Location: '/',
  });
  res.end();
};
