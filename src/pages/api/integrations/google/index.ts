import { NextApiRequest, NextApiResponse } from 'next';
import { AUTH_URL } from '@src/util/integrations/google/auth';
import auth0 from '@src/util/auth0';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const tokenCache = await auth0.tokenCache(req, res);
  res.writeHead(302, {
    Location: AUTH_URL,
  });
  res.end();
};
