import { NextApiRequest, NextApiResponse } from 'next';

/**
 * API endpoint for `/api/forms/{id}`
 * currently returns hardcoded data.
 */
export default (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { fid },
  } = req;

  res.status(200).json({
    id: '1234',
    fields: {
      ssaf: {
        label: 'label',
        value: 'value',
        error: 'error',
        type: 'text',
      },
    },
  });
};
