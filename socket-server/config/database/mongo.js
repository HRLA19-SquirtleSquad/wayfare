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
  message: String,
  room: String,
},
{
  timestamps: true
} 
)

//mongoose model
const Chat = mongoose.model('Chat', ChatSchema);

const storeChat = (username, message, room, callback) => {

  new Chat({
    author: username,
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

module.exports.Chat = Chat;
module.exports.storeChat = storeChat;

