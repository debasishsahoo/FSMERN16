
const UserCTRL = {
    signup: async (req, res, next) => {
        console.log('calling')
        res.send('Calling from Signup')
    },
    signin: async (req, res, next) => {
        res.send('Calling from Signin')
    },
    profileCreate: async (req, res, next) => {
        const { id } = req.params
        res.send(`Calling from Profile Create with ${id}`)
    },
    profileEdit: async (req, res, next) => {
        const { id } = req.params
        res.send(`Calling from Profile Edit with ${id}`)
    },
    profileDelete: async (req, res, next) => {
        const { id } = req.params
        res.send(`Calling from Profile Delete with ${id}`)
    },
    profileView: async (req, res, next) => {
        res.send('Calling from Profile Delete')
    },
    blockUser: async (req, res, next) => {
        res.send('Calling from Block User')
    }
}

module.exports = UserCTRL;