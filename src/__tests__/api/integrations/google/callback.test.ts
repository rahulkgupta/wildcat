import callback from '@src/pages/api/integrations/google/callback';
import { mock } from 'jest-mock-extended';
import { NextApiRequest, NextApiResponse } from 'next';
import oauth2Client from '@src/util/integrations/google/auth';
import fetcher from '@src/graphql/client/fetcher';
import addIntegration from '@src/graphql/client/addIntegration';

jest.mock('@src/util/integrations/google/auth');
jest.mock('@src/graphql/client/fetcher');

describe('callback', () => {
  it('redirects', async () => {
    const res = mock<NextApiResponse>();
    const req = mock<NextApiRequest>();
    req.query.code = 'code';
    const tokens = {
      refresh_token: 'test',
      access_token: 'test',
      expiry_date: 1234,
      token_type: 'bearer',
    };
    oauth2Client.getToken.mockReturnValueOnce({
      tokens,
    });

    await callback(req, res);
    expect(oauth2Client.getToken).toHaveBeenCalledWith('code');
    expect(fetcher).toHaveBeenCalledWith(addIntegration(), {
      data: tokens,
      service: 'google',
    });
    expect(res.writeHead).toHaveBeenCalledWith(302, { Location: '/' });
  });
});
