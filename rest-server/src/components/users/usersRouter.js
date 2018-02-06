import express from 'express';

import {
  getUserController,
  postUserController,
  updateUserController
} from './usersController';

const router = express.Router();

router.route('/getUser')
  .get(getUserController)

router.route('/postUser')
  .post(postUserController)

router.route('/editUser')
  .put(updateUserController)

export default router;