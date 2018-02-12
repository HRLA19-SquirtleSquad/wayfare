
import db from '../mongo';
import { getMessagesQuery, getLastMessageQuery, postStaticMessageQuery } from './chatQuery';


export const getMessagesController = async (req, res) => {
  console.log('inside controller')
  try {
    const data = await getMessagesQuery();
    return res.send(data)
}
  catch (err) {
    error('couldnt fetch messages from controller', err)
  }
}

export const getLastMessageController = async (req, res) => {
  try {
    const data = await getLastMessageQuery();
    return res.send(data)
  }
  catch (err) {
    error('couldnt get last message', err)
  }

}

export const postStaticMessageController = async (req, res) => {

  let guestName = req.body.guestName;
  let guestImage = req.body.guestImage;
  let guestId = req.body.guestId;
  let hostName = req.body.hostName;
  let hostImage = req.body.hostImage;
  let hostId = req.body.hostId;
  let listingId = req.body.listingId;
  let message = req.body.message;
  let room = req.body.room

  try {
    const data = await postStaticMessageQuery(guestName, guestImage, guestId, hostName, hostImage, hostId, listingId, message, room);
    return res.send(data)
  }
  catch (err) {
    error('Error posting static message (postStaticMessageController)', err)
  }

}




