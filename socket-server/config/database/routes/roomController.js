import db from '../mongo';
import { createRoomQuery, getRoomsQuery } from './roomQuery';


export const createRoomController = async (req, res) => {
  let roomId = req.body.roomId;
  let guestName = req.body.guestName;
  let guestImage = req.body.guestImage
  let guestId = req.body.guestId;
  let hostName = req.body.hostName;
  let hostImage = req.body.hostImage;
  let hostId = req.body.hostId;
  let listingId = req.body.listingId;
  let listingTitle = req.body.listingTitle;

  try {
    const data = await createRoomQuery(roomId, guestName, guestImage, guestId, hostName, hostImage, hostId, listingId, listingTitle);
    return res.send(data)
}
  catch (err) {
    console.log('couldnt create room (createRoomController)', err)
  }
}

export const getRoomsController = async (req, res) => {
  try {
    const data = await getRoomsQuery();
    return res.send(data)
  }
  catch (err) {
    console.log('couldnt get rooms (getRoomsController)', err)
  }

}

