const express =  require('express');
import chatRouter from './chatRouter'
import roomRouter from './roomRouter';

const router = express.Router();
router.use('/chat', chatRouter);
router.use('/rooms', roomRouter);

export default router;
