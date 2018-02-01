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
const MessageSchema = mongoose.Schema({
  author: String,
  body: String,
  chatroom: String,
},
{
  timestamps: true
} 
)

//mongoose model
const Message = mongoose.model('Message', MessageSchema);

const storeMessage = (username, message, room, callback) => {

  new Message({
    username: username,
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

module.exports.Message = Message;
module.exports.storeMessage = storeMessage;

