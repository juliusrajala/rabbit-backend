import pgPromise from 'pg-promise';

const pgp = pgPromise();

const connectionOptions = {
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  password: process.env.PGPASSWORD,
  database: 'rabbit',
  port: (process.env.PGPORT || 5432) as number
};

export const db = pgp(connectionOptions);

export default pgp;
