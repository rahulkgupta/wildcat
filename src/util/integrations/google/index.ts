import { google } from 'googleapis';

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URL,
);

const sheets = google.sheets('v4');

const scopes = ['https://www.googleapis.com/auth/drive.file'];

export const AUTH_URL = oauth2Client.generateAuthUrl({
  // 'online' (default) or 'offline' (gets refresh_token)
  // eslint-disable-next-line @typescript-eslint/camelcase
  access_type: 'offline',

  // If you only need one scope you can pass it as a string
  scope: scopes,
});

export const getToken = async function (code: string) {
  const { tokens } = await oauth2Client.getToken(code);
  return tokens;
};

// does this function need to konw about the form?
// does this function make db calls, or is the db info passed to this function?
// eg token values?
// callign the db means this isn't "pure"
// having the caller call the db means the caller needs to know about the token
// that's fine given that the caller needs to know the spreadsheet ID and the form info
export const appendValues = async function (spreadSheetID: string, token: Credentials, data) {
  oauth2Client.setCredentials(token);
  const result = await sheets.spreadsheets.values.append({
    auth: oauth2Client,
    spreadsheetId: '16D-xr-s-xtociQH4RcrhOGsgcHXG9m2VmenSbeM3Hw0',
    range: 'A1', // better understand what this is...
    valueInputOption: 'RAW',
    requestBody: {
      values: data,
    },
  });

  // TODO: convert result into something generic
  return result;
};
