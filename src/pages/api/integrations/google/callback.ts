import { setAccessToken } from '@src/util/db/integrations';
import { getToken } from '@src/util/integrations/google';

// TODO: handle errors
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const code = req.query.code;
  setAccessToken(getToken(code));

  res.writeHead(302, {
    Location: '/',
  });
  res.end();
};
