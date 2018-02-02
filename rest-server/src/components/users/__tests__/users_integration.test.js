require('dotenv').config();
require('dotenv').load();

// const request = require('supertest');
import request from 'supertest';

// import { 
//   dropUserTable,
//   createUserTable
// } from '../../../lib/SQL';

import {
  getUserUrl
} from '../../../config/global/testGlobals';

// import server from'../../../config/express';
import {server} from  '../../../';


describe('GET statusCode', () => {
  test('should receive a 200 status code on a GET request', async () => {
    expect.assertions(1);
    const response = await request(server)
      .get(getUserUrl)
      .query({uid: 'fakei34309'})
    expect(response.statusCode).toBe(200);
  })
});

describe('GET uid', () => {
  test('should receive correct uid on a GET request', async () => {
    expect.assertions(1);
    const response = await request(server)
      .get(getUserUrl)
      .query({uid: 'fakei34309'})
    expect(response.body.rows[0].uid).toBe('fakei34309');
  })
});