import { getToken, appendValues } from '.';
import sheets from './api';
import oauth2Client from './auth';
import { mock } from 'jest-mock-extended';
import { Credentials } from 'googleapis/node_modules/google-auth-library';

jest.mock('./auth');
jest.mock('./api');

describe('Google API', () => {
  beforeEach(() => {
    oauth2Client.setCredentials.mockClear();
  });
  it('getToken', async () => {
    oauth2Client.getToken.mockResolvedValue({
      tokens: {
        key: 'value',
      },
    });
    const token = await getToken('test');
    expect(oauth2Client.getToken).toHaveBeenCalledWith('test');
    expect(token).toMatchSnapshot();
  });

  it('appendValues', async () => {
    jest.mock('./auth');
    oauth2Client.setCredentials = jest.fn();
    const creds = mock<Credentials>();
    const data = [['test']];
    const result = await appendValues('id', creds, data);
    expect(sheets.spreadsheets.values.append).toHaveBeenCalledWith({
      auth: oauth2Client,
      spreadsheetId: 'id',
      range: 'A1',
      valueInputOption: 'RAW',
      requestBody: {
        values: data,
      },
    });
    expect(oauth2Client.setCredentials).toHaveBeenCalled();
    expect(result).toBeTruthy();
  });
});
