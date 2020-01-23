import { db } from '../core/pgp';

const startTx = db => cb => db.tx(txDb => cb(txDb));

export const databaseMiddleware = (req: any, res: Response, next) => {
  if (!req.db) {
    req.db = db;
  }
  req.startTx = startTx(req.db);
  next();
};
