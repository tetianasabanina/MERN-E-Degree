const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

// mongoose.connect('mongodb+srv://testuser:test@snacktime.mahho.mongodb.net/?retryWrites=true&w=majority')
// mongoose.connect('mongodb://127.0.0.1.27017/snacktime')
mongoose.connect('mongodb://localhost:27017/snacktime')
  .then(() => {
    console.log('success')
  }).catch(() => {
    console.log('error')
  })