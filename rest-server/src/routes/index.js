import express from 'express';
import usersRouter from '../components/users/usersRouter'
// import listingsRouter from '../components/listings/listingsRouter'

const router = express.Router();

router.use('/users', usersRouter);
// router.use('/listings', listingsRouter);

export default router;

