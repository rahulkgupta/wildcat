import auth0 from '@src/util/auth0';

export default async function login(req, res) {
  try {
    await auth0.handleLogin(req, res);
  } catch (error) {
    res.status(error.status || 400).end(error.message);
  }
}
