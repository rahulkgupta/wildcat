import { google } from 'googleapis';
import { setAccessToken } from '@src/util/db/integrations';

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URL,
);

const sheets = google.sheets('v4');

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const code = req.query.code;

  const { tokens } = await oauth2Client.getToken(code);
  setAccessToken(tokens);
  // need to store the token
  // understand how the refresh token works...
  oauth2Client.setCredentials(tokens);

  await sheets.spreadsheets.values.append({
    auth: oauth2Client,
    spreadsheetId: '16D-xr-s-xtociQH4RcrhOGsgcHXG9m2VmenSbeM3Hw0',
    range: 'A1', // better understand what this is...
    valueInputOption: 'RAW',
    requestBody: {
      values: [
        ['1', '2', '2'],
        ['3', '3', '4'],
      ],
    },
  });
  const sheet = await sheets.spreadsheets.get({
    auth: oauth2Client,
    spreadsheetId: '16D-xr-s-xtociQH4RcrhOGsgcHXG9m2VmenSbeM3Hw0',
  });
  console.log(sheet);

  res.writeHead(302, {
    Location: '/',
  });
  res.end();
};
