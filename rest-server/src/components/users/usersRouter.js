import express from 'express';

import {
  getUserController
} from './usersController';

const router = express.Router();

router.route('/getUser')
  .get(getUserController)


export default router;