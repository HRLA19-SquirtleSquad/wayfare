
import db from '../mongo';
import { getMessagesQuery, getLastMessageQuery } from './chatQuery';


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

