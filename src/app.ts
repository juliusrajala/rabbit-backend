require('dotenv').config();

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { databaseMiddleware } from './middleware/database';
import routes from './routes';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(databaseMiddleware as any);

app.use('/api', routes);

const startServer = () =>
  new Promise(resolve => {
    app.listen(port, () => {
      console.log(`Server listening port ${port}`);
      resolve();
    });
  }).catch(err => {
    console.log(err);
    process.exit(1);
  });

startServer();
