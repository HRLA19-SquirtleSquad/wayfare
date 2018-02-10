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
  createRequestAndRequestSkills
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

export default router;