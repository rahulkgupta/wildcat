import authReq from '.';
import { mock } from 'jest-mock-extended';
import { NextApiRequest, NextApiResponse } from 'next';
import { AUTH_URL } from '@src/util/integrations/google';

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
