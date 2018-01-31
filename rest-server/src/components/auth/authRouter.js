import express from 'express';

import {
  signUpController,
  loginController,
  logoutController
} from './authController';

const router = express.Router();

router.route('/local/signup')
  .post(signUpController)
router.route('/local/login')
  .post(loginController)
router.route('local/logout')
  .get(logoutController)

export default router;