import {
  // import queries from listingsQuery
  getListingImagesQuery, 
  getListingQuery, 
  updateListingViewCountQuery, 
  getListingSkillsQuery, 
  createListingQuery,
  getSearchedListingsQuery,
  postListingPhotoQuery
} from './listingsQuery';
import { getTopListings } from '../../config/redis/redis'

// define controllers

export const getListingPhoto = async (req, res) => {
  try {
    const data = await getListingImagesQuery(req.query.listingId); 
    return res.status(200).send(data.rows[0].url);
  } catch (err) {
    throw new Error(err);
  }
}

export const getListing  = async (req, res) => {
  try {
    const data = await getListingQuery(req.query.listingId); 
    return res.status(200).send(data.rows[0]); 
  } catch (err) {
    throw new Error( err); 
  }
}

export const updateListingViewCount = async (req, res) => {
  try {
    const data = await updateListingViewCountQuery(req.body.params.listingId); 
    return res.status(200).send(data); 
  } catch (err) {
    throw new Error (err); 
  }
}

export const getTopTenListings = async (req, res) => {
  try {
    const data = await getTopListings(); 
    return res.status(200).send(data); 
  } catch (err) {
    throw new Error (err); 
  }
}

export const getListingSkills = async (req, res) => {
  try {
    const data = await getListingSkillsQuery(req.query.listingId); 
    return res.status(200).send(data.rows); 
  }  catch (err) {
    throw new Error (err); 
  }
}

export const createListing = async (req, res) => {
  try {
    const data = await createListingQuery(req.body.params.listingDetails); 
    return res.status(200).send(data); 
  } catch (err) {
    throw new Error (err); 
  }
}

export const getSearchedListings = async (req, res) => {
  try {
    const data = await getSearchedListingsQuery(req.query.city);
    return res.status(200).send(data);
  } catch (err) {
    throw new Error (err);
  }
}
export const postListingPhoto = async (req, res) => {
  try {
    const data = await postListingPhotoQuery(req.body.listingId, req.body.url); 
    return res.status(200).send(data); 
  } catch (err) {
    throw new Error (err); 
  }
}


