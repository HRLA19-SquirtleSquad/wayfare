import express from 'express';

import { getMessagesController, getLastMessageController } from './chatController';

const chatRouter = express.Router();

chatRouter.route('/getMessages')
  .get(getMessagesController)

chatRouter.route('/getLastMessage')
  .get(getLastMessageController)


export default chatRouter;