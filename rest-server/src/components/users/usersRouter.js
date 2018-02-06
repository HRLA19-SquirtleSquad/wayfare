import express from 'express';

import {
  getUserController,
  postUserController,
  updateUserController, 
  getUserNameController, 
  getUserReviewsController
} from './usersController';

const router = express.Router();

router.route('/getUser')
  .get(getUserController)

router.route('/postUser')
  .post(postUserController)

router.route('/editUser')
  .put(updateUserController)

router.route('/getUserName') 
  .get(getUserNameController); 

router.route('/getUserReviews') 
  .get(getUserReviewsController); 


export default router;