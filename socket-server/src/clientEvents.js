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

// const clientUpdate = ({ io, client, room }, payload) => {
//   const { chat, email } = payload;
//   console.log('client update heard, payload:', payload);
//   room.set('chat', chat);
//   room.set('email', email);
//   serverChanged({ io, client, room});
// };

const clientDisconnect = ({}) => {
  console.log('client disconnected');
  serverLeave({ io, room });
};

const clientMessage = ({ io, room }, payload) => {
  console.log('client message heard');
  
  db.storeChat(payload.userName, payload.userImage, payload.userId, payload.listingId, payload.message, payload.room, payload.accountType, function(err, data){
    if (err) {
      console.log('couldnt save message to mongodb')
    } else {
      console.log('message saved?')
      serverMessage({ io, room }, payload);
    }
  })
};

// const clientRoomCreate = ({ io, room }, payload) => {
//   console.log('room creation heard');
  
//   db.storeRoom(payload.roomId, payload.guestId, payload.hostId, payload.listingId, function(err, data){
//     if (err) {
//       console.log('couldnt save room to mongodb')
//     } else {
//       console.log('room saved?')
//       serverMessage({ io, room }, payload);
//     }
//   })
// };



const clientEmitters = {
  'client.ready': clientReady,
  //'client.update': clientUpdate,
  'client.disconnect': clientDisconnect,
  'client.message': clientMessage
}

export default clientEmitters;
