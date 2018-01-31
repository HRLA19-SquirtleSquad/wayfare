import db from '../../config/database'

import {
  signUpHelper,
  loginQuery
} from './authSQLHelper.js';

export const signUpQuery = async (email, uid) => {
  try {
    const queryString = signUpHelper(email, uid);
    const data = await db.queryAsync(queryString);    
    console.log('authQuery - successfully added user data', data)
    return data
  } catch(err) {
    throw new Error (err);
  }
}

export const loginQuery = async (email, uid) => {
  try {
    const queryString = loginHelper(email, uid);
    const data = await db.queryAsync(queryString);
    // db.end();
    success('loginQuery - successfully retrieved data ', data);
    return data;
  } catch (err) {
    error('loginQuery - error= ', err);
    throw new Error(err);
  }
}