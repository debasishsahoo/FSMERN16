
const PostCTRL = {
    allPost: async (req, res, next) => {
        res.send('Calling from All Post')
        
    },
    createPost: async (req, res, next) => {
        res.send('Calling from Create Post')
    },
    singlePost: async (req, res, next) => {
        res.send('Calling from single Post')
    },
    singleUserPost: async (req, res, next) => {
        res.send('Calling from singleUserPost')
    },
    postEdit: async (req, res, next) => {
        res.send('Calling from post Edit')
    },
    postDelete: async (req, res, next) => {
        res.send('Calling from post Delete')
    },
    blockPost: async (req, res, next) => {
        res.send('Calling from block Post')
    }
}

module.exports = PostCTRL;