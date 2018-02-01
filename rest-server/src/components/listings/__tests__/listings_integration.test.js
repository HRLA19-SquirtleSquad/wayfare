require('dotenv').config();
require('dotenv').load();

import * as request from 'supertest';

import { 
  dropUserTable,
  createUserTable
} from '../../../lib/SQL';

import {
  signupUrl,
  loginUrl,
  logoutUrl,
  usersUrl,
  listingsUrl
} from '../../../config/global/testGlobals';

import app from'../../../config/express';
