import express from 'express';
import usersRouter from '../components/users/usersRouter'
// import listingsRouter from '../components/listings/listingsRouter'

const router = express.Router();

router.use('/users', usersRouter);
router.use('/auth', authRouter);

// router.  ('/listings', listingsRouter);

export default router;

