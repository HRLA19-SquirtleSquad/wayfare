// import db from '../../config/database'

import {
  getUserHelper
} from './usersSQLHelper.js';

export const getUserQuery = async (body) => {
  try {
    // const queryString = getUserHelper(body.userId);
    // const data = await db.queryAsync(queryString);
    let data = await function() {
      return 'test'
    }
    console.log('getUserQuery - successfully fetched user data', data)
    return data
  } catch(err) {
    throw new Error (err);
  }
}