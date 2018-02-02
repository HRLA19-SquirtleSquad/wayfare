import express from 'express';

import {
  signUpController,
  loginController,
  logoutController
} from './authController';

const router = express.Router();

router.route('/signup')
  .post(signUpController)
router.route('/login')
  .post(loginController)

export default router;