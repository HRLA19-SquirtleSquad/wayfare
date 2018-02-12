import express from 'express';

import { getMessagesController, getLastMessageController, postStaticMessageController} from './chatController';

const chatRouter = express.Router();

chatRouter.route('/getMessages')
  .get(getMessagesController)

chatRouter.route('/getLastMessage')
  .get(getLastMessageController)

chatRouter.route('/postStaticMessage')
  .post(postStaticMessageController)


export default chatRouter;