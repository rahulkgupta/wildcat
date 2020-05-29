import { NextApiRequest, NextApiResponse } from 'next';
import oauth2Client from '@src/util/integrations/google/auth';
import client from '@src/db/client';

// TODO: handle errors
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { tokens } = await oauth2Client.getToken(req.query.code as string);
  client.createAccessToken({
    data: {
      service: 'google',
      refresh_token: tokens.refresh_token,
      access_token: tokens.access_token,
      expiry_date: tokens.expiry_date,
      token_type: tokens.token_type,
    },
  });

  res.writeHead(302, {
    Location: '/',
  });
  res.end();
};
