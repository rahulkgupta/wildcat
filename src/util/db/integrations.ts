import db from './client';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const setAccessToken = function (token: Credentials) {
  db.client.query(
    db.q.Create(db.q.Collection('integrations'), {
      data: {
        token: token,
        service: 'google',
      },
    }),
  );
};

const getAccessToken = async function () {
  const ret = await db.client.query(db.q.Get(db.q.Match(db.q.Index('test'), 'google')));
  return ret;
};

export { setAccessToken, getAccessToken };
