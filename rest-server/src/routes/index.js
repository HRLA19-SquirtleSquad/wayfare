import express from 'express';
import usersRouter from '../components/users/usersRouter'
import authRouter from '../components/auth/authRouter'
import listingsRouter from '../components/listings/listingsRouter'
import s3upload from '../config/s3/s3.js';

const router = express.Router();

router.use('/users', usersRouter);
router.use('/auth', authRouter);
router.use('/listing', listingsRouter); 
router.use('/files', s3upload)

export default router;

