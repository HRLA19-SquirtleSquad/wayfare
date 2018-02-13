
import db from '../mongo';
import { getMessagesQuery, getLastMessageQuery, postStaticMessageQuery } from './chatQuery';

export const getMessagesController = async (req, res) => {

  let roomId = req.query.roomId;
  let id = req.query.userId;
  let accountType = req.query.accountType;

  try {
    const data = await getMessagesQuery(roomId, id, accountType);
    return res.send(data)
}
  catch (err) {
    console.log('couldnt fetch messages from controller', err)
  }
}

export const getLastMessageController = async (req, res) => {
  try {
    const data = await getLastMessageQuery();
    return res.send(data)
  }
  catch (err) {
    console.log('couldnt get last message', err)
  }

}

export const postStaticMessageController = async (req, res) => {
  let userName = req.body.userName;
  let userImage = req.body.userImage;
  let userId = req.body.userId;
  let listingId = req.body.listingId;
  let message = req.body.message;
  let room = req.body.room

  try {
    const data = await postStaticMessageQuery(userName, userImage, userId, listingId, message, room);
    return res.send(data)
  }
  catch (err) {
    console.log('Error posting static message (postStaticMessageController)', err)
  }

}




