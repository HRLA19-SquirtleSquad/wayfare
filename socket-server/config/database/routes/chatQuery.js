import mongoose from 'mongoose';
import db from '../mongo';

export const getMessagesQuery = async (roomId, id, accountType) => {
  try {

    // if logged in as guest:
    if (accountType === '0') {
      const data = await db.Chat.find({room: roomId}).sort('-createdAt');
      return data
    }

    // if logged in as host:
    if (accountType === '1') {
      const data = await db.Chat.find({room: roomId}).sort('-createdAt');
      return data
    }
  }
  catch (err) {
    console.log('messageQuery error', err)
  }
}

export const getLastMessageQuery = async () => {
  try {
    const data = await db.Chat.find().sort('-createdAt').limit(1)
    return data;
  }
  catch (err) {
    console.log('couldnt get last messagequery', err)
  }
}

export const postStaticMessageQuery = async (userName, userImage, userId, userUid, listingId, message, room, accountType) => {
  try {

    const data = await new db.Chat({
      userName: userName,
      userImage: userImage,
      userId: userId,
      userUid: userUid,
      listingId: listingId,
      message: message,
      room: room,
      accountType: accountType
    }).save();

    return data;
  }
  catch (err) {
    console.log('Error posting new chat message (postStaticMessageQuery)', err)
  }
}