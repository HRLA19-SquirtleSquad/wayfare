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
  getListingsByStatusQuery,
  updateListingQuery, 
  deleteListingSkillQuery,
  acceptListingQuery, 
  rejectListingQuery, 
  getRequestsByGuestQuery, 
  getRequestsByListingQuery, 
  completeListingQuery, 
  deleteListingQuery
} from './listingsQuery';

import { getTopListings } from '../../config/redis/redis'

// define controllers

export const getListingPhoto = async (req, res) => {
  try {
    const data = await getListingImagesQuery(req.query.listingId); 
    const result = data.rows[0] ? data.rows[0].url : ''; 
    return res.status(200).send(result);
  } catch (err) {
    console.log('Error', err);
  }
}

export const getListing  = async (req, res) => {
  try {
    const data = await getListingQuery(req.query.listingId); 
    return res.status(200).send(data.rows[0]); 
  } catch (err) {
    console.log('Error', err); 
  }
}

export const updateListingViewCount = async (req, res) => {
  try {
    const data = await updateListingViewCountQuery(req.body.params.listingId); 
    return res.status(200).send(data); 
  } catch (err) {
    console.log('Error', err); 
  }
}

export const getTopTenListings = async (req, res) => {
  try {
    const data = await getTopListings(); 
    return res.status(200).send(data); 
  } catch (err) {
    console.log('Error', err); 
  }
}

export const getListingSkills = async (req, res) => {
  try {
    const data = await getListingSkillsQuery(req.query.listingId); 
    return res.status(200).send(data.rows); 
  }  catch (err) {
    console.log('Error', err); 
  }
}

export const createListing = async (req, res) => {
  try {
    const data = await createListingQuery(req.body.params.listingDetails); 
    return res.status(200).send(data); 
  } catch (err) {
    console.log('Error', err); 
  }
}

export const getSearchedListings = async (req, res) => {
  try {
    const data = await getSearchedListingsQuery(req.query.city);
    return res.status(200).send(data);
  } catch (err) {
    console.log('Error', err);
  }
}
export const postListingPhoto = async (req, res) => {
  try {
    const data = await postListingPhotoQuery(req.body.listingId, req.body.url); 
    return res.status(200).send(data); 
  } catch (err) {
    console.log('Error', err); 
  }
}

export const createUserSkills = async (req, res) => {
  try {
    // create user skill using the userId
    await createUserSkillsQuery(req.body.userId, req.body.skill)
    const data = await getUserSkillsQuery(req.body.userId);
    return res.status(200).send(data)
  } catch (err) {
    console.log('Error', err); 
  }
}

export const getUserSkills = async (req, res) => {
  try {
    const data = await getUserSkillsQuery(req.query.userId)
    return res.status(200).send(data)
  } catch (err) {
    console.log('Error', err); 
  }
}

export const addSkillToListing = async (req, res) => {
  try {
    const data = await addSkillToListingQuery(req.body.params); 
    return res.status(200).send(data); 
  } catch (err) {
    console.log('Error', err); 
  }
}
export const deleteUserSkills = async (req, res) => {
  try {
    await deleteUserSkillsQuery(req.query.id);
    const data = await getUserSkillsQuery(req.query.uid)
    return res.status(200).send(data)
  } catch (err) {
    console.log('Error', err);
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
      createRequestSkillsQuery(skillId, requestId)
    })
    return res.status(200).send();
  } catch(err) {
    console.log('Error', err);
  }
}

export const getListingsByStatus = async (req, res) => {
  try {
    const data = await getListingsByStatusQuery(req.query.status); 
    return res.status(200).send(data)
  }
  catch (err) {
    console.log('Error', err)
  }
}

export const updateListing = async (req, res) => {
  try {
    const data = await updateListingQuery(req.body.params.listingDetails); 
    return res.status(200).send(data); 
  } catch (err) {
    console.log('Error', err); 
  }
}

export const deleteListingSkill = async (req, res) => {
  try {
    await deleteListingSkillQuery(req.query);
    return res.status(200); 
  } catch (err) {
    console.log('Error', err);
  }
}

export const acceptListing = async (req, res) => {
  try {
     const data = await acceptListingQuery(req.body.params); 
     return res.status(200).send(data)
   }
   catch (err) {
     console.log('Error', err)
   }
}

export const rejectListing = async (req, res) => {
  try {
    const data = await rejectListingQuery(req.query); 
    return res.status(200).send(data); 
  } catch (err) {
    console.log('Error', err); 
  }
}

export const getRequestsByGuest = async (req, res) => {
  try {
    const data = await getRequestsByGuestQuery(req.query); 
    return res.status(200).send(data); 
  } catch (err) {
    console.log('Error', err); 
  }
}

export const getRequestsByListing = async (req, res) => {
  try {
    const data = await getRequestsByListingQuery(req.query); 
    return res.status(200).send(data); 
  } catch (err) {
    console.log('Error', err); 
  }
}


export const completeListing = async (req, res) => {
  try {
    const data = await completeListingQuery(req.body.params); 
    return res.status(200).send(data); 
  } catch (err) {
    console.log('Error', err); 
  }
}

export const deleteListing = async (req, res) => {
  try {
    const data = await deleteListingQuery(req.query); 
    return res.status(200).send(data); 
  } catch (err) {
    console.log('Error', err); 
  }
}