require('dotenv').config();
require('dotenv').load();

// const request = require('supertest');
import request from 'supertest';

import { 
  dropAllTables, 
  createAllTables
} from '../../../lib/SQL';

import {
  getUserUrl,
  postUserUrl
} from '../../../config/global/testGlobals';

// import server from'../../../config/express';
import {app} from  '../../../';

beforeAll(async () => {
  await dropAllTables();
  await createAllTables();
  await request(app)
    .post(postUserUrl)
    .send({name: 'Chobani Patel', email: 'chov@gmail.com', uid: 'testuid'})

})

describe('GET statusCode', () => {
  test('should receive a 200 status code on a GET request', async () => {
    expect.assertions(1);
    const response = await request(app)
      .get(getUserUrl)
      .query({uid: 'testuid'})
    expect(response.statusCode).toBe(200);
  })
});

describe('GET uid', () => {
  test('should fetch a user that was created', async () => {
    expect.assertions(3);
    const response = await request(app)
      .get(getUserUrl)
      .query({uid: 'testuid'})
    expect(response.body.rows[0].name).toBe('Chobani Patel');
    expect(response.body.rows[0].email).toBe('chov@gmail.com');
    expect(response.body.rows[0].uid).toBe('testuid');
  })
});