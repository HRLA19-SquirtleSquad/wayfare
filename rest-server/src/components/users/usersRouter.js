import express from 'express';

import {
  getUserController,
  postUserController
} from './usersController';

const router = express.Router();

router.route('/getUser')
  .get(getUserController)

router.route('/postUser')
  .post(postUserController)

export default router;