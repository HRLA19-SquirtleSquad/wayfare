import db from '../../config/database'

import {
  signUpHelper,
  loginHelper
} from './authSQLHelper';

export const signUpQuery = async (name, email, uid, image) => {
  try {
    const queryString = signUpHelper(name, email, uid, image);
    const data = await db.queryAsync(queryString);    
    console.log('[authQuery.js] - successfully added user data', data)
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
    console.log('[authQuery.js] - successfully retrieved data ', data);
    return data;
  } catch (err) {
    throw new Error(err);
  }
}