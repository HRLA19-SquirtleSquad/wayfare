import db from '../../config/database'

import {
  getUserHelper,
  postUserHelper
} from './usersSQLHelper';

export const getUserQuery = async (uid) => {
  try {
    const queryString = getUserHelper(uid);
    const data = await db.queryAsync(queryString);    
    console.log('getUserQuery - successfully fetched user data', data)
    return data
  } catch(err) {
    throw new Error (err);
  }
}

export const postUserQuery = async (body) => {
  console.log('query')
  try {
    const queryString = postUserHelper(
      body.name,
      body.email,
      body.uid
    );
    const data = await db.queryAsync(queryString);    
    console.log('postUserQuery - successfully posted user data', data)
    return data
  } catch(err) {
    throw new Error (err);
  }
}