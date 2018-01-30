import express from 'express';
// const express = require('express');
import usersRouter from '../components/users/usersRouter'
// import listingsRouter from '../components/listings/listingsRouter'

// router.use('/users', usersRouter);
// router.use('/listings', listingsRouter);
const router = express.Router();

router.use('/users', usersRouter);

export default router;

