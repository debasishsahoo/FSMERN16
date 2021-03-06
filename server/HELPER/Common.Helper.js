const mongoose = require('mongoose')
const UserModel = require('../models/user.model')


const CommonHelepr = {
    validId: id => {
        return mongoose.Types.ObjectId.isValid(id)
    },
    IdExist: async UserObj => {
        return await UserModel.findOne(UserObj)
    },
    ValidUser: async UserObj => {
        return await UserModel.findOne(UserObj)
    }
}

module.exports = CommonHelepr