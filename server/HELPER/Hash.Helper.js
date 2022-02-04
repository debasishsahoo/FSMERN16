const bcrypt = require('bcrypt')
const dotenv = require('dotenv')
dotenv.config()
const Hash_Key = parseInt(`${process.env.HASH_KEY}`)

const HashHelper = {
    HasedPassword: async (password) => {
        return await bcrypt.hash(password, Hash_Key)
    },
    isPasswordCorrect: async (newpassword, oldpassword) => {
        return await bcrypt.compare(newpassword, oldpassword)
    }
}

module.exports = HashHelper