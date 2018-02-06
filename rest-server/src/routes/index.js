import express from 'express';
import usersRouter from '../components/users/usersRouter'
import authRouter from '../components/auth/authRouter'
import listingsRouter from '../components/listings/listingsRouter'

const router = express.Router();

router.use('/users', usersRouter);
router.use('/auth', authRouter);
router.use('/listing', listingsRouter); 


export default router;

