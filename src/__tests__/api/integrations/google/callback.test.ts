import callback from '@src/pages/api/integrations/google/callback';
import { mock } from 'jest-mock-extended';
import { NextApiRequest, NextApiResponse } from 'next';
import oauth2Client from '@src/util/integrations/google/auth';
import fetcher from '@src/graphql/client/fetcher';
import addIntegration from '@src/graphql/client/addIntegration';
import auth0 from '@src/util/auth0';

jest.mock('@src/util/integrations/google/auth');
jest.mock('@src/graphql/client/fetcher');
jest.mock('@src/util/auth0');

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

    const getAccessToken = jest.fn();
    auth0.tokenCache.mockReturnValueOnce({
      getAccessToken,
    });

    getAccessToken.mockReturnValueOnce({
      accessToken: 'accessToken',
    });
    await callback(req, res);
    expect(oauth2Client.getToken).toHaveBeenCalledWith('code');
    expect(fetcher).toHaveBeenCalledWith(addIntegration(tokens, 'google'), 'accessToken');
    expect(res.writeHead).toHaveBeenCalledWith(302, { Location: '/' });
  });
});
