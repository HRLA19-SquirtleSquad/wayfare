import express from 'express';

import {
  getUserController,
  postUserController,
  updateUserController, 
  getUserNameController, 
  getUserReviewsController,
  getGivenReviewsController,
  getReceivedReviewsController,
  upgradeUserController
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

router.route('/getGivenReviews')
  .get(getGivenReviewsController);

router.route('/getReceivedReviews')
  .get(getReceivedReviewsController);
router.route('/upgradeUser')
  .put(upgradeUserController)

export default router;