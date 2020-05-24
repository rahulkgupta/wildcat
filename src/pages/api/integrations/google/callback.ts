import { NextApiRequest, NextApiResponse } from 'next';

// TODO: handle errors
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const code = req.query.code;

  res.writeHead(302, {
    Location: '/',
  });
  res.end();
};
