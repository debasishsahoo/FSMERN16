const mongoose = require('mongoose');

let UserSchema = mongoose.Schema(
    {
        id: { type: String },
        name: { type: String, required: true },
        email: { type: String, required: true },
        mobile: { type: String, required: true },
        image: { type: String, required: true },
        password: { type: String, required: true },
        isAdmin: { type: Boolean, default: false },
        isActive: { type: Boolean, default: false },
        joinAt: { type: Date, default: Data.now }
    },
    { timestamp: true }
);


module.exports = mongoose.model("users", UserSchema)