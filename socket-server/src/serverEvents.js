export const serverInitalState = ({client, room}, payload) => {
  if (!room.get('chat')) {
    room.set('chat', payload)
    client.emit('server.initialState', {
        id: client.id,
        chat: payload
    })
  } else {
    client.emit('server.initalState', {
      id: client.id,
      chat: room.get('chat')
    });
  }
};

export const serverChanged = ({ io, room }) => {
  const roomId = room.get('id');
  const email = room.get('email');
  io
    .in(roomId)
    .emit('server changed', { text, email });
};

export const serverLeave = ({ io, room }) => {
  io
    .in(room.get('id'))
    .emit('server.leave');
};

export const serverMessage = ({io, room}, message) => {
  io 
    .in(room.get('id'))
    .emit('server.message', message);
};