import db from '../../config/database'

import {
  getTopListingsHelper, 
  getListingImagesHelper, 
  getListingHelper, 
  updateListingViewCountHelper, 
  getListingSkillsHelper, 
  createListingHelper
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

export const createListingQuery = async ( {title, startDate, endDate, latitude, longitude, address, city, hostId, description} ) => {
  try {
    const queryString = createListingHelper( title, startDate, endDate, latitude, longitude, address, city, hostId, description ); 
    const data = await db.queryAsync(queryString); 
    return data; 
  } catch (err) {
    throw new Error (err); 
  }
}