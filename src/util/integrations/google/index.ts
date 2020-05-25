import { Credentials } from 'googleapis/node_modules/google-auth-library';
import sheets from './api';
import oauth2Client from './auth';

export const getToken = async function (code: string): Promise<Credentials> {
  const { tokens } = await oauth2Client.getToken(code);
  return tokens;
};

// does this function need to konw about the form?
// does this function make db calls, or is the db info passed to this function?
// eg token values?
// callign the db means this isn't "pure"
// having the caller call the db means the caller needs to know about the token
// that's fine given that the caller needs to know the spreadsheet ID and the form info
export const appendValues = async function (
  spreadsheetId: string,
  token: Credentials,
  data: string[][],
): Promise<boolean> {
  const result = true;
  oauth2Client.setCredentials(token);
  await sheets.spreadsheets.values.append({
    auth: oauth2Client,
    spreadsheetId,
    range: 'A1', // better understand what this is...
    valueInputOption: 'RAW',
    requestBody: {
      values: data,
    },
  });

  // TODO: convert result into something generic
  return result;
};
