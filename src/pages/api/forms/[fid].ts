import { NextApiRequest, NextApiResponse } from 'next';
import { getFormByID, getNextForm } from '@src/util/db';

/**
 * API endpoint for `/api/forms/{id}`
 * currently returns hardcoded data.
 */
export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const json = JSON.parse(req.body);
    const id = json['id'];
    // fetch form by ID db.getFormByID(json.id);
    const form = getFormByID(id);

    // validate form
    // probably just type checks for each field (main validation happens in the integrations?)
    // for example (if credit card field, make sure that it's a credit card)
    // if it's a radio, make sure the selection is in range...

    // go through integrations

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
