import express from 'express';

import { createRoomController, getRoomsController } from './roomController';

const roomRouter = express.Router();

roomRouter.route('/createRoom')
  .post(createRoomController)

roomRouter.route('/getRooms')
  .get(getRoomsController)


export default roomRouter;