import { NextApiRequest, NextApiResponse } from 'next';

/**
 * API endpoint for `/api/forms/{id}`
 * currently returns hardcoded data.
 */
export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    // Process a POST request
    const json = JSON.parse(req.body);
    // maybe something like, form.getIntegrations()....
    // for each integration, run code...(generally will be async)
    // wait for all integrations to complete, then send response back to client
    return res.status(200); // figure out what message to send to the client;
  } else {
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
        adsfsdf: {
          type: 'submit',
          value: 'Submit',
        },
      },
    });
  }
};
