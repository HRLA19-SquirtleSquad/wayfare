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
  userUid: String,
  listingId: Number,
  message: String,
  room: String,
  accountType: Number
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

const storeChat = (userId, userName, userImage, userUid, message, room, listingId, accountType, callback) => {

  new Chat({
    userId: userId,
    userName: userName,
    userImage: userImage,
    userUid: userUid,
    message: message,
    room: room,
    listingId: listingId,
    accountType: accountType
  }).save((err, data) => {
    if (err) {
      console.log('error', err)
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
