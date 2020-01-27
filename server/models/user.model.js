const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique:true
  },
  name: {
    type: String,
    required: true
  },
  favoriteSubbreddit: {
    type: Array,
    required: false,
 
  },
  isSubscribed:{
      type:Boolean,
      required:true
  }
})

module.exports = mongoose.model('User', userSchema)