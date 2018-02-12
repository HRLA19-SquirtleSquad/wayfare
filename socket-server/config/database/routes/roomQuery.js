import mongoose from 'mongoose';
import db from '../mongo';

export const createRoomQuery = async (roomId, guestId, hostId, listingId) => {
  try {

    const queryString = createRoomHelper(roomId, guestId, hostId, listingId);
    const room = new Room({
      roomId: roomId,
      guestId: guestId,
      hostId: hostId,
      listingId: listingId
    })

    const data = await room.save();
    console.log('i am saved room data...', data)
    return data;
  }
  catch (err) {
    console.log('Error creating room (createRoomQuery)', err)
  }
}

export const getRoomsQuery = async () => {
  try {
    const data = await db.Room.find().sort('-createdAt')
    return data;
  }
  catch (err) {
    console.log('Error getting rooms (getRoomsQuery)', err)
  }
}