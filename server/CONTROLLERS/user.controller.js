const UserModel = require('../models/user.model')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()
const Encode_Key = `${process.env.SECRET_KEY}`
const Hash_Key = parseInt(`${process.env.HASH_KEY}`)


const UserCTRL = {
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