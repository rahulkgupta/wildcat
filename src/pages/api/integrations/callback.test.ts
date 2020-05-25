import callback from './google/callback';
import { mock } from 'jest-mock-extended';
import { NextApiRequest, NextApiResponse } from 'next';

describe('callback', () => {
  it('redirects', async () => {
    const res = mock<NextApiResponse>();
    const req = mock<NextApiRequest>();

    await callback(req, res);

    expect(res.writeHead).toHaveBeenCalledWith(302, { Location: '/' });
  });
});
