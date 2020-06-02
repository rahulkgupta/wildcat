import callback from '@src/pages/api/integrations/google/callback';
import { mock } from 'jest-mock-extended';
import { NextApiRequest, NextApiResponse } from 'next';
import db from '@src/db';
import oauth2Client from '@src/util/integrations/google/auth';

jest.mock('@src/util/integrations/google/auth');
jest.mock('@src/db');

describe('callback', () => {
  it('redirects', async () => {
    const res = mock<NextApiResponse>();
    const req = mock<NextApiRequest>();
    req.query.code = 'code';
    oauth2Client.getToken.mockReturnValueOnce({
      tokens: {
        refresh_token: 'test',
        access_token: 'test',
        expiry_date: 1234,
        token_type: 'bearer',
      },
    });

    await callback(req, res);
    expect(oauth2Client.getToken).toHaveBeenCalledWith('code');
    expect(db.createAccessToken).toHaveBeenCalledWith({
      data: {
        service: 'google',
        refresh_token: 'test',
        access_token: 'test',
        expiry_date: 1234,
        token_type: 'bearer',
      },
    });
    expect(res.writeHead).toHaveBeenCalledWith(302, { Location: '/' });
  });
});
