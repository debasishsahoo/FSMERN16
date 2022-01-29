const express = require('express');
const dotenv = require('dotenv');
const UserRoutes = require('../ROUTERS/user.routes')
const PostRoutes = require('../ROUTERS/post.routes')
const AdminRoutes = require('../ROUTERS/admin.routes')
dotenv.config()
const PORT = process.env.PORT;

const app = express();


app.use('/user', UserRoutes);
app.use('/post', PostRoutes);
app.use('/admin', AdminRoutes);

/**
 * STARTING THE APPLICATION SERVER WITH ALL THE CREAD
 * 
 */
app.listen(PORT, () => console.log(`Express Servert is Started at Port No:${PORT}`));