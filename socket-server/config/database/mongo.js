const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/27017');

const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});
//mongoose Schema
const ChatSchema = mongoose.Schema({
  author: String,
  authorImage: String,
  message: String,
  room: String,
},
{
  timestamps: true
} 
)

const RoomSchema = mongoose.Schema({
  roomId: {type: String, unique: true},
  guestId: String,
  hostId: String,
  listingId: String,
},
{
  timestamps: true
} 
)

//mongoose model
const Chat = mongoose.model('Chat', ChatSchema);

const storeChat = (username, authorImage,message, room, callback) => {

  new Chat({
    author: username,
    authorImage: authorImage,
    message: message,
    room: room
  }).save((err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data)
    }
  })
}

const Room = mongoose.model('Room', RoomSchema);
// const storeRoom = (roomId, guestId, hostId, listingId, callback) => {
//   new Room({
//     roomId: roomId,
//     guestId: guestId,
//     hostId: hostId,
//     listingId: listingId
//   }).save((err, data) => {
//     if (err) {
//       callback(err, null);
//     } else {
//       callback(null, data)
//     }
//   })
// }

module.exports.Room = Room;
module.exports.Chat = Chat;
module.exports.storeChat = storeChat;
// module.exports.storeRoom = storeRoom;

