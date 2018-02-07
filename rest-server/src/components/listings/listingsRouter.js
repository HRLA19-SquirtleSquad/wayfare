import express from 'express';

import {
  getListingPhoto, 
  getListing, 
  updateListingViewCount, 
  getTopTenListings, 
  getListingSkills
  // import controllers from listingsController
} from './listingsController';

const router = express.Router();

// ex: router.route(blah)
//      .get(blah)

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
  
export default router;