import { Credentials } from 'googleapis/node_modules/google-auth-library';
import sheets from './api';
import oauth2Client from './auth';

export const getToken = async function (code: string): Promise<Credentials> {
  const { tokens } = await oauth2Client.getToken(code);
  return tokens;
};

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
