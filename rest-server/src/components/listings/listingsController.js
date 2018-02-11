import {
  // import queries from listingsQuery
  getListingImagesQuery, 
  getListingQuery, 
  updateListingViewCountQuery, 
  getListingSkillsQuery, 
  createListingQuery,
  getSearchedListingsQuery,
  postListingPhotoQuery,
  addSkillToListingQuery,
  getUserSkillsQuery,
  createUserSkillsQuery,
  deleteUserSkillsQuery,
  createRequestQuery,
  createRequestSkillsQuery,
  getListingsByStatusQuery
} from './listingsQuery';
import {
  getUserQuery
} from '../users/usersQuery';
import { getTopListings } from '../../config/redis/redis'

// define controllers

export const getListingPhoto = async (req, res) => {
  try {
    const data = await getListingImagesQuery(req.query.listingId); 
    const result = data.rows[0] ? data.rows[0].url : ''; 
    return res.status(200).send(result);
  } catch (err) {
    throw new Error(err);
  }
}

export const getListing  = async (req, res) => {
  try {
    const data = await getListingQuery(req.query.listingId); 
    return res.status(200).send(data.rows[0]); 
  } catch (err) {
    throw new Error(err); 
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

export const createUserSkills = async (req, res) => {
  try {
    //get user id first using uid
    // const user = await getUserQuery(req.body.uid);
    
    // create user skill using the userId
    // console.log(user.rows[0].id)
    await createUserSkillsQuery(req.body.userId, req.body.skill)
    const data = await getUserSkillsQuery(req.body.userId);
    // console.log(data)
    return res.status(200).send(data)
  } catch (err) {
    throw new Error (err); 
  }
}

export const getUserSkills = async (req, res) => {
  try {
    console.log('query id', req.query.userId)
    // const userId = await getUserQuery(req.query.userId);
    // console.log('userId', userId)
    const data = await getUserSkillsQuery(req.query.userId)
    // console.log('data', data)
    return res.status(200).send(data)
  } catch (err) {
    throw new Error (err); 
  }
}

export const addSkillToListing = async (req, res) => {
  try {
    const data = await addSkillToListingQuery(req.body.params); 
    return res.status(200).send(data); 
  } catch (err) {
    throw new Error (err); 
  }
}
export const deleteUserSkills = async (req, res) => {
  try {
    await deleteUserSkillsQuery(req.query.id);
    const data = await getUserSkillsQuery(req.query.uid)
    console.log(data)
    return res.status(200).send(data)
  } catch (err) {
    throw new Error(err);
  }
}

export const createRequestAndRequestSkills = async (req, res) => {
  try {
    let guestId = req.body.guestId
    let listingId = req.body.listingId
    let skillIdArray = req.body.skillId
    
    const request = await createRequestQuery(guestId, listingId)
    const requestId = request.rows[0].id
    
    await skillIdArray.map(skillId => {
      console.log(typeof skillId)
      createRequestSkillsQuery(skillId, requestId)
    })
    return res.status(200)
  } catch(err) {
    throw new Error(err);
  }
}

export const getListingsByStatus = async (req, res) => {
  try {
   console.log('req.query.status', req.query.status)
    const data = await getListingsByStatusQuery(req.query.status); 
    return res.status(200).send(data)
  }
  catch (err) {
    throw new Error(err)
  }
}