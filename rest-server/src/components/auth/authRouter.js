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
router.route('/logout')
  .get(logoutController)

export default router;