import { NextApiRequest, NextApiResponse } from 'next';
import { getFormByID, getNextForm } from '@src/util/db';
import { getAccessToken } from '@src/util/db/integrations';
import { google } from 'googleapis';

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URL,
);

const sheets = google.sheets('v4');

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

    // validate form
    // probably just type checks for each field (main validation happens in the integrations?)
    // for example (if credit card field, make sure that it's a credit card)
    // if it's a radio, make sure the selection is in range...

    // go through integrations
    const token = await getAccessToken();
    oauth2Client.setCredentials(token.data.token);
    await sheets.spreadsheets.values.append({
      auth: oauth2Client,
      spreadsheetId: '16D-xr-s-xtociQH4RcrhOGsgcHXG9m2VmenSbeM3Hw0',
      range: 'A1', // better understand what this is...
      valueInputOption: 'RAW',
      requestBody: {
        values: [[json.fields[0].value]],
      },
    });

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
