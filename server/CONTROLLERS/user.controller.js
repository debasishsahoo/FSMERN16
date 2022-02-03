const UserModel = require('../models/user.model')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()
const Encode_Key = `${process.env.SECRET_KEY}`
const Hash_Key = parseInt(`${process.env.HASH_KEY}`)
const TimeOut = parseInt(`${process.env.EXPIRESIN}`)


const UserCTRL = {
    allUser: async (req, res, next) => {
        try {
            const AllUser = await UserModel.find();
            res.status(200).json({
                message: 'All User List...',
                user: AllUser
            });
        } catch (error) {
            res.status(404).json({
                message: error.message,
            })
        }
    },
    signup: async (req, res, next) => {
        const { name, email, password, mobile } = req.body
        try {
            const oldUser = await UserModel.findOne(email);
            if (oldUser) {
                return res.status(400).json({
                    message: "Email already Exists",
                });
            }
            const HasedPassword = await bcrypt.hash(password, Hash_Key)
            const SendData = await UserModel.create({
                name,
                email,
                password: HasedPassword,
                mobile
            });
            res.status(201).json({
                message: "User Created",
                user: SendData
            })
        }
        catch (error) {
            res.status(404).json({
                message: error.message,
            })
        }
    },
    signin: async (req, res, next) => {
        const { email, password } = req.body;
        try {
            const oldUser = await UserModel.findOne(email);
            if (!oldUser) {
                return res.status(400).json({
                    message: "user Dose Not Exist",
                });
            }
            const isPassWordCorrect = await bcrypt.compare(password, oldUser.password)
            if (!isPassWordCorrect) {
                return res.status(400).json({
                    message: "Invalide Password",
                });
            }
            const token = jwt.sign(
                {
                    email: oldUser.email,
                    id: oldUser.id,
                },
                Encode_Key,
                { expiresIn: TimeOut }
            );
            res.status(200).json({
                message: "Sucessfully Login",
                user: oldUser,
                token: token
            })
        }
        catch (error) {
            res.status(500).json({
                message: "Something Went Wrong"
            })
        }


    },
    profileEdit: async (req, res, next) => {
        const { id } = req.params
        const { name, mobile, image } = req.body
        try {
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(404).json({
                    message: `No User with id:${id}`,
                })
            }
            const UpdateProfile = {
                name, mobile, image, _id: id
            }
            await UserModel.findByIdAndUpdate(id, UpdateProfile, { new: true })
            res.status(200).json({
                message: `User with id:${id} is Updated`,
                user: UpdateProfile
            })
        }
        catch (error) {
            res.status(404).json({
                message: error.message,
            })
        }
    },
    profileDelete: async (req, res, next) => {
        const { id } = req.params;
        try {
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(404).json({
                    message: `No User with id:${id}`,
                })
            }
            await UserModel.findByIdAndDelete(id);
            res.status(202).json({
                message: `User with id:${id} is Deleted`,
            });
        }
        catch (error) {
            res.status(409).json({
                message: error.message,
            })
        }

    },
    profileView: async (req, res, next) => {
        const { id } = req.params
        try {
            const SingleUser = await UserModel.findById(id);
            res.status(200).json({
                message: `User of this ${id} Found`,
                user: SingleUser
            });
        } catch (error) {
            res.status(404).json({
                message: error.message,
            })
        }
    },
    blockUser: async (req, res, next) => {
        const { id } = req.params;
        const { isActive } = req.body;
        try {
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(404).json({
                    message: `No User with id:${id}`,
                })
            }
            isActive = isActive === '1' ? true : false;
            const BlockUser = {
                isActive, _id: id
            }
            await UserModel.findByIdAndUpdate(id, BlockUser, { new: true })
            res.status(200).json({
                message: `User with id:${id} is Block`,
                user: BlockUser
            })
        }
        catch (error) {
            res.status(404).json({
                message: error.message,
            })
        }
    }
}

module.exports = UserCTRL;