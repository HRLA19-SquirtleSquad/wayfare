const express = requier('express');
const router = express.router();

import usersRouter from '../components/users/usersRouter'
import listingsRouter from '../components/listings/listingsRouter'

router.use('/users', usersRouter);
router.use('/listings', listingsRouter);

export default router;

