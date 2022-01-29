const mongoose = require('mongoose');

let PostSchema = mongoose.Schema(
    {
        id: { type: String },
        title: { type: String, required: true },
        body: { type: String, required: true },
        image: { type: String, required: true },
        attachment: { type: String },
        authorid: { type: String, required: true },
        isActive: { type: Boolean, default: false },
        createAt: { type: Date, default: Date.now }
    },
    { timestamp: true }
);


module.exports = mongoose.model("posts", PostSchema)