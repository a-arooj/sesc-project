const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const plm = require('passport-local-mongoose');
// mongoose.connect("mongodb://127.0.0.1:27017/students1").then(() => {
//   console.log("Mongodb connected successfully.");
// });
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  first_name: {
    type: String,

  },
  last_name: {
    type: String,

  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  id: {
    type: String,
    unique: true,
    maxlength: 5
  },
  password: {
    type: String,

  },
  is_student: {
    type: Boolean,
    default: false
  }
});

userSchema.plugin(plm);

const User = mongoose.model('User', userSchema);

module.exports = User;
