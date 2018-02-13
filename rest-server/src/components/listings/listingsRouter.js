import express from 'express';

import {
  getListingPhoto, 
  getListing, 
  updateListingViewCount, 
  getTopTenListings, 
  getListingSkills, 
  createListing,
  getSearchedListings,
  postListingPhoto,
  addSkillToListing,
  getUserSkills,
  createUserSkills,
  deleteUserSkills,
  createRequestAndRequestSkills,
  getListingsByStatus,
  updateListing, 
  deleteListingSkill, 
  acceptListing, 
  rejectListing,
  getRequestsByGuest, 
  getRequestsByListing, 
  completeListing
  // import controllers from listingsController
} from './listingsController';

const router = express.Router();

// ex: router.route(blah)
//      .get(blah)

router.route('/postPhoto')
  .post(postListingPhoto);

router.route('/getPhoto') 
  .get(getListingPhoto); 

router.route('/getListing')
  .get(getListing); 

router.route('/updateListingViewCount') 
  .post(updateListingViewCount); 

router.route('/getTopListings') 
  .get(getTopTenListings)

router.route('/getListingSkills')
  .get(getListingSkills)

router.route('/createListing')
  .post(createListing)

router.route('/getSearchedListings')
  .get(getSearchedListings)

router.route('/getListingsByStatus')
  .get(getListingsByStatus)
  
router.route('/addSkill') 
  .post(addSkillToListing)

router.route('/createUserSkills')
  .post(createUserSkills)

router.route('/getUserSkills')
  .get(getUserSkills)

router.route('/deleteUserSkills')
  .delete(deleteUserSkills)

router.route('/createRequestAndRequestSkills')
  .post(createRequestAndRequestSkills)

router.route('/updateListing')
  .put(updateListing)

router.route('/deleteListingSkill') 
  .delete(deleteListingSkill)

router.route('/acceptListing') 
  .put(acceptListing)

router.route('/rejectListing') 
  .delete(rejectListing)
  
router.route('/getRequestsByGuest') 
  .get(getRequestsByGuest)

router.route('/getRequestsByListing') 
  .get(getRequestsByListing)

router.route('/completeListing')
  .put(completeListing)
export default router;