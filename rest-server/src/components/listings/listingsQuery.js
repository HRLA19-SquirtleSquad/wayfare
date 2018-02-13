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
  getListingsByStatusHelper,
  deleteListingSkillHelper, 
  acceptListingHelper, 
  rejectListingHelper,
  getRequestsByGuestHelper, 
  getRequestsByListingHelper, 
  completeListingHelper, 
  getUserSkillsHelper, 
  createUserSkillsHelper,
  deleteUserSkillsHelper,
  createRequestHelper,
  createRequestSkillsHelper
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


export const deleteListingSkillQuery = async ( skillId ) => {
  try  { 
      const queryString = deleteListingSkillHelper( skillId );
      const data = await db.queryAsync(queryString);
      return data; 
    } catch (err) {
      throw new Error (err); 
    }
}

export const acceptListingQuery =  async ( listingDetails ) => {
  try  { 
      const queryString = acceptListingHelper( listingDetails );
      const data = await db.queryAsync(queryString);
      return data; 
    } catch (err) {
      throw new Error (err); 
    }
}

export const rejectListingQuery =  async ( listingDetails ) => {
  try  { 
      const queryString = rejectListingHelper( listingDetails );
      const data = await db.queryAsync(queryString);
      return data; 
    } catch (err) {
      throw new Error (err); 
    }
}

export const getRequestsByGuestQuery = async ( guestId ) => {
  try  { 
    const queryString = getRequestsByGuestHelper( guestId );
    const data = await db.queryAsync(queryString);
    return data; 
  } catch (err) {
    throw new Error (err); 
  }
}

export const getRequestsByListingQuery = async ( listingId ) => {
  try  { 
    const queryString = getRequestsByListingHelper(listingId);
    const data = await db.queryAsync(queryString);
    return data; 
  } catch (err) {
    throw new Error (err); 
  }
}

export const completeListingQuery = async ( listingId ) => {
  try  { 
    const queryString = completeListingHelper(listingId);
    const data = await db.queryAsync(queryString);
    return data; 
  } catch (err) {
    throw new Error (err); 
  }
}

export const createUserSkillsQuery = async ( userId, skill ) => {
  try {
    const queryString = createUserSkillsHelper( userId, skill);
    const data = await db.queryAsync(queryString);
    return data;
  } catch (err) {
    throw new Error(err);
  }
}

export const getUserSkillsQuery = async ( userId ) => {
  try {
    const queryString = getUserSkillsHelper( userId);
    const data = await db.queryAsync(queryString);
    return data;
  } catch (err) {
    throw new Error(err);
  }
}

export const deleteUserSkillsQuery = async (id) => {
  try {
    const queryString = deleteUserSkillsHelper(id);
    const data = await db.queryAsync(queryString)
    return data;
  } catch(err) {
    throw new Error(err);
  }
}

export const createRequestQuery = async (guestId, listingId ) => {
  try {
    const queryString = createRequestHelper(guestId, listingId);
    const data = await db.queryAsync(queryString)
    return data;
  } catch(err) {
    throw new Error(err);
  }
}
     
export const createRequestSkillsQuery = async (skillId, requestId ) => {
  try {
    const queryString = createRequestSkillsHelper(skillId, requestId);
    const data = await db.queryAsync(queryString)
    return data;
  } catch(err) {
    throw new Error(err);
  }
}