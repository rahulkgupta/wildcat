import { NextApiRequest, NextApiResponse } from 'next';
import { AUTH_URL } from '@src/util/integrations/google';

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.writeHead(302, {
    Location: AUTH_URL,
  });
  res.end();
};
