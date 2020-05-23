import faunadb from 'faunadb';

const db = {
  client: new faunadb.Client({ secret: process.env.FAUNADB_SECRET || '' }),
  q: faunadb.query,
};
export default db;
