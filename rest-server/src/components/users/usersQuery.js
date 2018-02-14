import db from '../../config/database'

import {
  getUserHelper,
  postUserHelper,
  putUserHelper, 
  getUserNameHelper,
  getUserReviewsHelper,
  getGivenReviewsHelper,
  getReceivedReviewsHelper,
  upgradeUserHelper,
  getUserDataHelper, 
  getUserReviewsByListingHelper, 
  postReviewHelper
} from './usersSQLHelper';

export const getUserQuery = async (uid) => {
  try {
    const queryString = getUserHelper(uid);
    const data = await db.queryAsync(queryString);    
    // console.log('getUserQuery - successfully fetched user data', data)
    return data
  } catch(err) {
    throw new Error(err);
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
    throw new Error(err);
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
    throw new Error(err);
  }
}

export const getUserNameQuery = async (userId) => {
  try {
    const queryString = getUserNameHelper(userId); 
    const data = await db.queryAsync(queryString); 
    return data; 
  } catch (err) {
    throw new Error(err); 
  }
}

export const getUserDataQuery = async (userId) => {
  try {
    const queryString = getUserDataHelper(userId); 
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
    throw new Error(err); 
  }
}

export const upgradeUserQuery = async (body) => {
  try {
    const queryString = upgradeUserHelper(
      body.uid,
      body.type
    );
    const data = await db.queryAsync(queryString);
    return data;
  } catch (err) {
    throw new Error(err); 
  }
}

// export const getGivenReviewsQuery = async (userId) => {
//   try {
//     const queryString = getGivenReviewsHelper(userId);
//     const data = await db.queryAsync(queryString);
//     return data;
//   } catch (err) {
//     throw new Error(err);
//   }
// }

// export const getReceivedReviewsQuery = async (userId) => {
//   try {
//     const queryString = getReceivedReviewsHelper(userId);
//     const data = await db.queryAsync(queryString);
//     return data;
//   } catch (err) {
//     throw new Error(err);
//   }
// }

export const getUserReviewsByListingQuery = async ( listingDetails ) =>  {
  try {
    const queryString = getUserReviewsByListingHelper(listingDetails); 
    const data = await db.queryAsync(queryString);
    return data;
  } catch (err) {
    throw new Error(err); 
  }
}

export const postReviewQuery =  async ( reviewDetails ) =>  {
  try {
    console.log('review details', reviewDetails)
    const queryString = postReviewHelper(reviewDetails); 
    const data = await db.queryAsync(queryString);
    return data;
  } catch (err) {
    throw new Error(err); 
  }
}