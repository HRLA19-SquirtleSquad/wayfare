import axios from 'axios';
import db from '../config/database/mongo';
import {
  serverInitialState,
  serverChanged,
  serverLeave,
  serverMessage,
  serverInitalState
} from './serverEvents';

const clientReady = ({ io, client, room}, payload) => {
  console.log('client ready heard');
  serverInitalState({ io, client, room}, payload);
} 

const clientDisconnect = ({}) => {
  console.log('client disconnected');
  serverLeave({ io, room });
};

const clientMessage = ({ io, room }, payload) => {
  console.log('client message heard');
  
  db.storeChat(payload.userId, payload.userName, payload.userImage, payload.userUid, payload.message, payload.room, payload.listingId, payload.accountType, function(err, data){
    if (err) {
      console.log('couldnt save message to mongodb')
    } else {
      console.log('message saved?')
      serverMessage({ io, room }, payload);
    }
  })
};

const clientEmitters = {
  'client.ready': clientReady,
  'client.disconnect': clientDisconnect,
  'client.message': clientMessage
}

export default clientEmitters;