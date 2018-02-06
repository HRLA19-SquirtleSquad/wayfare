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