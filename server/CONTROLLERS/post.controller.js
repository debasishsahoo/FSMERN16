const PostModel = require('../MODELS/post.model')
const PostCTRL = {
    allPost: async (req, res, next) => {
        res.send('Calling from All Post')
    },
    createPost: async (req, res, next) => {
        const requestPostData = req.body;
        console.log(requestPostData);


        
        const SendPostData = new PostModel({
            ...requestPostData,
            //authorid: req.body.authorid,
            createAt: new Date().toISOString()
        });
        console.log(SendPostData);
        try {
            await SendPostData.save();
            res.status(200).json({
                message: 'New Post is Created',
                post: SendPostData
            });
        } catch (error) {
            res.status(404).json({
                message: error.message,
            })
        }
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