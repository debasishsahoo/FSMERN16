const mongoose = require('mongoose');
const PostModel = require('../MODELS/post.model')
const PostCTRL = {
    allPost: async (req, res, next) => {
        try {
            const AllPost = await PostModel.find();
            res.status(200).json({
                message: 'All Post List...',
                post: AllPost
            });
        } catch (error) {
            res.status(404).json({
                message: error.message,
            })
        }
    },
    createPost: async (req, res, next) => {
        const requestPostData = req.body;
        const SendPostData = new PostModel({
            ...requestPostData,
            createAt: new Date().toISOString()
        });
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
        const { id } = req.params
        try {
            const SinglePost = await PostModel.findById(id);
            res.status(200).json({
                message: `Post of this ${id} Found`,
                post: SinglePost
            });
        } catch (error) {
            res.status(404).json({
                message: error.message,
            })
        }


    },
    singleUserPost: async (req, res, next) => {
        res.send('Calling from singleUserPost')
    },
    postEdit: async (req, res, next) => {
        const { id } = req.params;
        const { title, body, image } = req.body;
        try {
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(404).json({
                    message: `No Post with id:${id}`,
                })
            }
            const UpdatePost = {
                title, body, image, _id: id
            }
            await PostModel.findByIdAndUpdate(id, UpdatePost, { new: true })
            res.status(200).json({
                message: `Post with id:${id} is Updated`,
                post: UpdatePost
            })
        }
        catch (error) {
            res.status(404).json({
                message: error.message,
            })
        }


    },
    postDelete: async (req, res, next) => {
        const { id } = req.params;
        try {
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(404).json({
                    message: `No Post with id:${id}`,
                })
            }
            await PostModel.findByIdAndDelete(id);
            res.status(202).json({
                message: `Post with id:${id} is Deleted`,
            });
        }
        catch (error) {
            res.status(409).json({
                message: error.message,
            })
        }

    },
    blockPost: async (req, res, next) => {
        const { id } = req.params;
        const { isActive } = req.body;
        try {
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(404).json({
                    message: `No Post with id:${id}`,
                })
            }
            isActive = isActive === '1' ? true : false;
            const BlockPost = {
                isActive, _id: id
            }
            await PostModel.findByIdAndUpdate(id, UpdatePost, { new: true })
            res.status(200).json({
                message: `Post with id:${id} is Block`,
                post: BlockPost
            })
        }
        catch (error) {
            res.status(404).json({
                message: error.message,
            })
        }
    }
}

module.exports = PostCTRL;