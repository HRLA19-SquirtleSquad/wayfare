import db from '../../config/database'

import {
  getUserHelper,
  postUserHelper,
  putUserHelper, 
  getUserNameHelper,
  getUserReviewsHelper
} from './usersSQLHelper';

export const getUserQuery = async (uid) => {
  try {
    const queryString = getUserHelper(uid);
    const data = await db.queryAsync(queryString);    
    // console.log('getUserQuery - successfully fetched user data', data)
    return data
  } catch(err) {
    throw new Error (err);
  }
}

export const postUserQuery = async (body) => {
  try {
    const queryString = postUserHelper(
      body.name,
      body.email,
      body.uid
    );
    const data = await db.queryAsync(queryString);    
    // console.log('postUserQuery - successfully posted user data', data)
    return data
  } catch(err) {
    throw new Error (err);
  }
}

export const editUserQuery = async (body) => {
  try {
    const queryString = putUserHelper(
      body.city,
      body.bio,
      body.image,
      body.uid
    );
    const data = await db.queryAsync(queryString);
    // console.log('editUserQuery - successfully edited user data', data)
    return data;
  } catch (err) {
    throw new Error (err);
  }
}

export const getUserNameQuery = async (userId) => {
  try {
    const queryString = getUserNameHelper(userId); 
    const data = await db.queryAsync(queryString); 
    return data; 
  } catch (err) {
    throw new Error (err); 
  }
}


export const getUserReviewsQuery = async (userId) => {
  try {
    const queryString = getUserReviewsHelper(userId); 
    const data = await db.queryAsync(queryString); 
    return data; 
  } catch (err) {
    throw new Error (err); 
  }
}