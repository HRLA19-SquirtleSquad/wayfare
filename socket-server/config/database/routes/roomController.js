import db from '../mongo';
import { createRoomQuery, getRoomsQuery } from './roomQuery';


export const createRoomController = async (req, res) => {
  let roomId = req.body.roomId;
  let guestId = req.body.guestId;
  let hostId = req.body.hostId;
  let listingId = req.body.listingId;

  try {
    const data = await createRoomQuery(roomId, guestId, hostId, listingId);
    return res.send(data)
}
  catch (err) {
    error('couldnt create room (createRoomController)', err)
  }
}

export const getRoomsController = async (req, res) => {
  try {
    const data = await getRoomsQuery();
    return res.send(data)
  }
  catch (err) {
    error('couldnt get rooms (getRoomsController)', err)
  }

}

