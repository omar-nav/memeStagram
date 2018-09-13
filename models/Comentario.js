const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userComment = new Schema({
  comment: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  date: {
    date: Date
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
})
// type: Schema.Types.ObjectId,
module.exports = mongoose.model('Comment', userComment)





