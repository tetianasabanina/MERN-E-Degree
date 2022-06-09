const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

// mongoose.connect('mongodb+srv://testuser:test@bestBlog.mahho.mongodb.net/?retryWrites=true&w=majority')
// mongoose.connect('mongodb://127.0.0.1.27017/bestBlog')
// mongoose.connect('mongodb://localhost:27017/bestBlog')
mongoose.connect('mongodb+srv://tatiana08:tatiana08@cluster0.znxsc.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    console.log('success')
  }).catch(() => {
    console.log('error')
  })