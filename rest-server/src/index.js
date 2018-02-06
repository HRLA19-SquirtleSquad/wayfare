import http from 'http';

import App from './config/express';
import './config/database'
// import './config/database/mongo';
import './config/cron'; 

export const app = App.express;

const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

server.listen(PORT, (err) => {
  if (err) throw new Error;
  console.log('successfully connected to port ', PORT);
});
