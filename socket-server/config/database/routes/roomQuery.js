import mongoose from 'mongoose';
import db from '../mongo';

export const createRoomQuery = async (roomId, guestName, guestImage, guestId, hostName, hostImage, hostId, listingId, listingTitle) => {
  try {
    const data = await new db.Room({
      roomId: roomId,
      guestName: guestName,
      guestImage: guestImage,
      guestId: guestId,
      hostName: hostName,
      hostImage: hostImage,
      hostId: hostId,
      listingId: listingId,
      listingTitle: listingTitle
    }).save();

    console.log('i am saved room data...', data)
    return data;
  }
  catch (err) {
    // will error if a room with same name already exists.
    console.log('Error creating room (createRoomQuery)', err)
  }
}

export const getRoomsQuery = async (id, accountType) => {
  try {

    // if logged in as guest:
    if (accountType === '0') {
      const data = await db.Room.find({guestId: id}).sort('-createdAt');
      console.log('data after fetching guest rooms:', data)
      return data
    }

    // if logged in as host:
    if (accountType === '1') {
      const data = await db.Room.find({hostId: id}).sort('-createdAt');
      console.log('data after fetching host rooms:', data)
      return data
    }


  }
  catch (err) {
    console.log('Error getting rooms (getRoomsQuery)', err)
  }
}