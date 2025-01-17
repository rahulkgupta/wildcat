import authReq from '@src/pages/api/integrations/google';
import { mock } from 'jest-mock-extended';
import { NextApiRequest, NextApiResponse } from 'next';
import { AUTH_URL } from '@src/util/integrations/google/auth';

describe('callback', () => {
  it('redirects', async () => {
    const res = mock<NextApiResponse>();
    const req = mock<NextApiRequest>();

    await authReq(req, res);

    expect(res.writeHead).toHaveBeenCalledWith(302, {
      Location: AUTH_URL,
    });
  });
});
