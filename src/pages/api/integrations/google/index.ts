import { google } from 'googleapis';

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URL,
);

// generate a url that asks permissions for Blogger and Google Calendar scopes
const scopes = ['https://www.googleapis.com/auth/drive.file'];

const url = oauth2Client.generateAuthUrl({
  // 'online' (default) or 'offline' (gets refresh_token)
  // eslint-disable-next-line @typescript-eslint/camelcase
  access_type: 'offline',

  // If you only need one scope you can pass it as a string
  scope: scopes,
});

console.log(url);

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.writeHead(302, {
    Location: url,
  });
  res.end();
};
