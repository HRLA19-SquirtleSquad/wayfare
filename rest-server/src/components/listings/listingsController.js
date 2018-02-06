import {
  // import queries from listingsQuery
  getListingImagesQuery, 
  getListingQuery, 
  updateListingViewCountQuery
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
    await updateListingViewCountQuery(req.body.params.listingId); 
    return res.status(200); 
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