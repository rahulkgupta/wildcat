import auth0 from '@src/util/auth0';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await auth0.handleLogin(req, res);
  } catch (error) {
    res.status(error.status || 400).end(error.message);
  }
};
