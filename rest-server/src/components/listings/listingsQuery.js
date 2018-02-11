import db from '../../config/database'

import {
  getTopListingsHelper, 
  getListingImagesHelper, 
  getListingHelper, 
  updateListingViewCountHelper, 
  getListingSkillsHelper, 
  createListingHelper,
  getSearchedListingsHelper,
  postListingPhotoHelper,
  addSkillToListingHelper,
  updateListingHelper, 
  getListingByStatusHelper
} from './listingsSQLHelper';

// define queries
export const getTopListingsQuery = async () => {
  try {
    const queryString = getTopListingsHelper(); 
    const data = await db.queryAsync(queryString); 
    //console.log('getTopListingsQuery - successfully fetched user data'); 
    return data; 
  } catch (err) {
    throw new Error (err); 
  }
}

export const getListingImagesQuery = async (listingId) => {
  try{ 
    const queryString = getListingImagesHelper(listingId); 
    const data = await db.queryAsync(queryString);
    
    // console.log('i am data after getting images from sql...', data) 
    //console.log('getListingImagesQuery - successfully fetched listing images'); 
    return data; 
  } catch (err) {
    throw new Error (err); 
  }
}

export const getListingQuery = async (listingId) => {
  try {
    const queryString = getListingHelper(listingId); 
    const data = await db.queryAsync(queryString);
    return data; 
  } catch (err) {
    throw new Error (err); 
  }
}

export const updateListingViewCountQuery = async (listingId) => {
  try {
    const queryString = updateListingViewCountHelper(listingId); 
    const data = await db.queryAsync(queryString); 
    return data;
  } catch (err) {
    throw new Error (err); 
  }
}

export const getListingSkillsQuery = async ( listingId ) => {
  try {
    const queryString = getListingSkillsHelper(listingId); 
    const data = await db.queryAsync(queryString); 
    return data; 
  } catch (err) {
    throw new Error (err); 
  }
}

export const createListingQuery = async ( {title, startDate, endDate, latitude, longitude, address, city, state, country, hostId, description} ) => {
  try {
    const queryString = createListingHelper( title, startDate, endDate, latitude, longitude, address, city, state, country, hostId, description ); 
    const data = await db.queryAsync(queryString); 
    return data; 
  } catch (err) {
    throw new Error (err); 
  }
}

export const getSearchedListingsQuery = async (city) => {
  try {
    const queryString = getSearchedListingsHelper(city);
    const data = await db.queryAsync(queryString);
    return data;
  } catch (err) {
    throw new Error (err);
  }
}
export const postListingPhotoQuery = async (listingId, url) => {
  try {
    console.log('i am listingid and url:', listingId, url)
    const queryString = postListingPhotoHelper(listingId, url); 
    const data = await db.queryAsync(queryString); 
    return data; 
  } catch (err) {
    throw new Error (err); 
  }
}
export const getListingsByStatusQuery = async (status) => {
  try {
    const queryString = getListingsByStatusHelper(status); 
    const data = await db.queryAsync(queryString); 
    return data; 
  } catch (err) {
    throw new Error (err); 
  }
}


export const addSkillToListingQuery = async ( skillDetails ) => {
  try {
    const queryString = addSkillToListingHelper( skillDetails ); 
    const data = await db.queryAsync(queryString); 
    return data; 
  } catch (err) {
    throw new Error (err); 
  }
}

export const updateListingQuery = async ( listingDetails ) => {
  try  { 
      const queryString = updateListingHelper( listingDetails );
      const data = await db.queryAsync(queryString); 
      return data; 
    } catch (err) {
      throw new Error (err); 
    }
}
