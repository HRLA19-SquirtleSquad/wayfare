import mongoose from 'mongoose';
import db from '../mongo';

export const getMessagesQuery = async () => {
  try {
    const data = await db.Chat.find()
    //success('retrieved mongo messages', data);
    return data;
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

export const postStaticMessageQuery = async (guestName, guestImage, guestId, hostName, hostImage, hostId, listingId, message, room) => {
  try {

    const data = await new db.Chat({
      guestName: guestName,
      guestImage: guestImage,
      guestId: guestId,
      hostName: hostName,
      hostImage: hostImage,
      hostId: hostId,
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