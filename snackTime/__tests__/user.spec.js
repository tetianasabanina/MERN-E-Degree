const mongoose = require('mongoose')
const UserModel = require('../models/user.model')

let objectId = mongoose.Types.ObjectId()
let userObject = {
  _id: objectId,
  name: 'nick',
  email: 'nick@website.com',
  userName: 'nickUser'
}

describe('Tests new user creation', () => {
  let dbc = null
  let id = null

  beforeAll(() => {
    return dbc = mongoose.connect('mongodb://127.0.0.1:27017/testing').then(result => {
      console.log('we have connected')
      return result
    }).catch(error => {
      console.log('we did not connect')
      return error
    })
  })

  test('Adds new document to collection', () => {
    return UserModel.createNew(userObject).then(result => {
      console.log(result)
      expect(result.name).toBe('nick')
      return id = result._id
    }).catch(error => {
      expect(error).not.toBeTruthy()
      return error
    })
  })

  afterEach(() => {
    return UserModel.findByIdAndRemove(id).then(result => {
      console.log('successfully removed')
      return result 
    }).catch(error => {
      console.log('could not remove')
      return error
    })
  })
})