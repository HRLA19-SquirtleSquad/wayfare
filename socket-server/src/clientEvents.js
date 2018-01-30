import axios from 'axios';
import {
  serverInitialState,
  serverChanged,
  serverLeave,
  serverMessage,
  serverInitalState
} from './serverEvents';

const clientReady = ({ io, client, room}) => {
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
  serverMessage({ io, room }, payload);
};

const clientEmitters = {
  'client.ready': clientReady,
  //'client.update': clientUpdate,
  'client.disconnect': clientDisconnect,
  'client.message': clientMessage
}

export default clientEmitters;
