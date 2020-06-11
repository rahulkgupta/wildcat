import { NextApiRequest, NextApiResponse } from 'next';
import oauth2Client from '@src/util/integrations/google/auth';

// TODO: handle errors
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { tokens } = await oauth2Client.getToken(req.query.code as string);
  res.writeHead(302, {
    Location: '/',
  });
  res.end();
};
