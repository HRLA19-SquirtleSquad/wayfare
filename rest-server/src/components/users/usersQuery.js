import db from '../../config/database'

import {
  getUserHelper
} from './usersSQLHelper.js';

export const getUserQuery = async (userId) => {
  try {
    const queryString = getUserHelper(userId);
    const data = await db.queryAsync(queryString);    
    console.log('getUserQuery - successfully fetched user data', data)
    return data
  } catch(err) {
    throw new Error (err);
  }
}