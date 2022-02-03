const mongoose = require('mongoose');

let UserSchema = mongoose.Schema(
    {
        id: { type: String },
        name: { type: String, required: true },
        email: { type: String, required: true },
        mobile: { type: String },
        image: { type: String },
        password: { type: String, required: true },
        isAdmin: { type: Boolean, default: false },
        isActive: { type: Boolean, default: true },
        joinAt: { type: Date, default: Date.now }
    },
    { timestamp: true }
);


module.exports = mongoose.model("users", UserSchema)