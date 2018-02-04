import db from '../../config/database'

import {
  getTopListingsHelper, 
  getListingImagesHelper
} from './listingsSQLHelper.js';

// define queries
export const getTopListingsQuery = async () => {
  try {
    const queryString = getTopListingsHelper(); 
    const data = await db.queryAsync(queryString); 
    console.log('getTopListingsQuery - successfully fetched user data'); 
    return data; 
  } catch (err) {
    throw new Error (err); 
  }
}

export const getListingImagesQuery = async (listingId) => {
  try{ 
    const queryString = getListingImagesHelper(listingId); 
    const data = await db.queryAsync(queryString); 
    console.log('getListingImagesQuery - successfully fetched listing images'); 
    return data; 
  } catch (err) {
    throw new Error (err); 
  }
}