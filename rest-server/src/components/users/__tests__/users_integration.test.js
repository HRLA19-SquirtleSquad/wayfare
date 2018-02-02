require('dotenv').config();
require('dotenv').load();

const request = require('supertest');
// import * as request from 'supertest'

// import { 
//   dropUserTable,
//   createUserTable
// } from '../../../lib/SQL';

import {
  getUserUrl
} from '../../../config/global/testGlobals';

// import app from'../../../config/express';
import {server} from  '../../../';

describe('test', () => {
  test('should do something', async () => {
    expect.assertions(1);
    const response = await request(server)
      .get(getUserUrl)
      .query({uid: 'fakei34309'})
    expect(response.statusCode).toBe(200);
  })
});
