const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/27017');

const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

const ChatSchema = mongoose.Schema({
  userName: String,
  userImage: String,
  userId: Number,
  listingId: Number,
  message: String,
  room: String,
},
{
  timestamps: true
} 
)

const RoomSchema = mongoose.Schema({
  roomId: {type: String, unique: true},
  guestName: String,
  guestImage: String,
  guestId: Number,
  hostName: String,
  hostImage: String,
  hostId: Number,
  listingId: Number,
  listingTitle: String
},
{
  timestamps: true
} 
)

//mongoose model
const Chat = mongoose.model('Chat', ChatSchema);

const storeChat = (userName, userImage, userId, listingId, message, room, callback) => {

  new Chat({
    userName: userName,
    userImage: userImage,
    userId: userId,
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

const Room = mongoose.model('Room', RoomSchema);

module.exports.Room = Room;
module.exports.Chat = Chat;
module.exports.storeChat = storeChat;

