import { NextApiRequest, NextApiResponse } from 'next';
import { getFormByID, getNextForm } from '@src/db/datastore';
import { appendValues } from '@src/util/integrations/google';
import client from '@src/db';

/**
 * API endpoint for `/api/forms/{id}`
 * currently returns hardcoded data.
 */
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const json = JSON.parse(req.body);
    const id = json['id'];
    // fetch form by ID db.getFormByID(json.id);
    const form = getFormByID(id);

    // go through integrations
    const { findAccessTokenByService } = await client.findAccessTokenByService({ service: 'google' });

    await appendValues(
      '16D-xr-s-xtociQH4RcrhOGsgcHXG9m2VmenSbeM3Hw0',
      {
        // eslint-disable-next-line @typescript-eslint/camelcase
        access_token: findAccessTokenByService?.access_token,
      },
      [[json.fields[0].value]],
    );
    // based on the integrations, send the next response...
    if (!form?.next) {
      return res.status(404);
    }
    return res.status(200).json(getNextForm(id)); // figure out what message to send to the client;
  } else {
    const fid = req.query.fid;

    const form = getFormByID(fid as string);
    if (!form) {
      return res.status(404).json({});
    }
    return res.status(200).json(form);
  }
};
