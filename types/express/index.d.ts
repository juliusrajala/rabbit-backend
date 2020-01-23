declare namespace Express {
  interface Request {
    db?: any;
    startTx?: any;
  }
}
