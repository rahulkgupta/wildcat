import { NextApiRequest, NextApiResponse } from 'next';
import oauth2Client from '@src/util/integrations/google/auth';
import db from '@src/db';

// TODO: handle errors
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { tokens } = await oauth2Client.getToken(req.query.code as string);
  db.createAccessToken({
    data: {
      service: 'google',
      // eslint-disable-next-line @typescript-eslint/camelcase
      refresh_token: tokens.refresh_token,
      // eslint-disable-next-line @typescript-eslint/camelcase
      access_token: tokens.access_token,
      // eslint-disable-next-line @typescript-eslint/camelcase
      expiry_date: tokens.expiry_date,
      // eslint-disable-next-line @typescript-eslint/camelcase
      token_type: tokens.token_type,
    },
  });

  res.writeHead(302, {
    Location: '/',
  });
  res.end();
};
