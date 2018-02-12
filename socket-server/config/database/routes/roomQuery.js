import mongoose from 'mongoose';
import db from '../mongo';

export const createRoomQuery = async (roomId, guestId, hostId, listingId) => {
  try {
    const data = await new db.Room({
      roomId: roomId,
      guestId: guestId,
      hostId: hostId,
      listingId: listingId
    }).save();

    console.log('i am saved room data...', data)
    return data;
  }
  catch (err) {
    // will error if a room with same name already exists.
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