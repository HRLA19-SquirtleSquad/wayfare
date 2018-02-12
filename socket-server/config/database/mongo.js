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

  // author: String,
  // authorImage: String,
  // message: String,
  // room: String,

const ChatSchema = mongoose.Schema({
  guestName: String, // changed
  guestImage: String, // changed
  guestId: Number, // new
  hostName: String, // new
  hostImage: String, // new
  hostId: Number, // new
  listingId: Number, // new
  message: String, // changed
  room: String, // changed
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

const storeChat = (guestName, guestImage, guestId, hostName, hostImage, hostId, listingId, message, room, callback) => {

  new Chat({
    guestName: guestName,
    guestImage, guestImage,
    guestId, guestId,
    hostName: hostName,
    hostImage: hostImage,
    hostId: hostId,
    listingId: listingId,
    message: message,
    room: room,
  }).save((err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data)
    }
  })
}

// const storeChat = (username, authorImage,message, room, callback) => {

//   new Chat({
//     author: username,
//     authorImage: authorImage,
//     message: message,
//     room: room
//   }).save((err, data) => {
//     if (err) {
//       callback(err, null);
//     } else {
//       callback(null, data)
//     }
//   })
// }

const Room = mongoose.model('Room', RoomSchema);

module.exports.Room = Room;
module.exports.Chat = Chat;
module.exports.storeChat = storeChat;

