import db from '../../config/database'

import {
  signUpHelper,
  loginHelper
} from './authSQLHelper';

export const signUpQuery = async (email, uid, image, name) => {
  try {
    const queryString = signUpHelper(email, uid, image, name);
    const data = await db.queryAsync(queryString);    
    return data
  } catch(err) {
    console.log('[authQuery.js] - Error adding user data: ', err);
    throw new Error (err);
  }
}

export const loginQuery = async (email, uid) => {
  try {
    const queryString = loginHelper(email, uid);
    const data = await db.queryAsync(queryString);
    return data;
  } catch (err) {
    console.log('[authQuery.js] - Error retrieving data: ', err);
  }
}