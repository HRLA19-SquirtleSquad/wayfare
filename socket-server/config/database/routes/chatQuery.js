import mongoose from 'mongoose';
import db from '../mongo';

export const getMessagesQuery = async (roomId, id, accountType) => {
  try {

    console.log('req query', roomId, id, accountType)
    // if logged in as guest:
    if (accountType === '0') {
      const data = await db.Chat.find({room: roomId}).sort('-createdAt');
      console.log('data after fetching guest messages:', data)
      return data
    }

    // if logged in as host:
    if (accountType === '1') {
      const data = await db.Chat.find({room: roomId}).sort('-createdAt');
      console.log('data after fetching host messages:', data)
      return data
    }






    // const data = await db.Chat.find()
    // //success('retrieved mongo messages', data);
    // return data;
  }
  catch (err) {
    console.log('messageQuery error', err)
  }
}

export const getLastMessageQuery = async () => {
  try {
    const data = await db.Chat.find().sort('-createdAt').limit(1)
    return data;
    console.log('lastmessage', data);
  }
  catch (err) {
    console.log('couldnt get last messagequery', err)
  }
}

export const postStaticMessageQuery = async (userName, userImage, userId, listingId, message, room) => {
  try {

    const data = await new db.Chat({
      userName: userName,
      userImage: userImage,
      userId: userId,
      listingId: listingId,
      message: message,
      room: room
    }).save();

    console.log('i am new chat message:', data)
    return data;
  }
  catch (err) {
    console.log('Error posting new chat message (postStaticMessageQuery)', err)
  }
}