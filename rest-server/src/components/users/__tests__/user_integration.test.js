require('dotenv').config();
require('dotenv').load();

import * as request from 'supertest';

// import db setup functions
import { 
  dropUserTable,
  createUserTable
} from '../../../lib/SQL';

// import global api endpoints
import {
  usersUrl,
  listingsUrl
} from '../../../config/global/testGlobals';

// import new instance of a server
import app from'../../../config/express';

let token;

beforeAll(async () => {
  await dropUserTable();
  await createUserTable();
  token = await request(app)
    .post(usersUrl)
    .send()
})


