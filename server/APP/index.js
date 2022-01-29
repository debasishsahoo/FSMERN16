/**
 * #this place is for all the libs,CORS,env
 */
const express = require('express');
/**
 * #this place is for all the modules like routes,db,configs
 */
const UserRoutes = require('../ROUTERS/user.routes')
const PostRoutes = require('../ROUTERS/post.routes')
const AdminRoutes = require('../ROUTERS/admin.routes')
const PORT = 7000;
/**
 * CREATE APP  & IT IS THE SINGLE ENTRY FOR APPLICATION
 */
const app = express();


app.use('/user', UserRoutes);
app.use('/post', PostRoutes);
app.use('/admin', AdminRoutes);

/**
 * STARTING THE APPLICATION SERVER WITH ALL THE CREAD
 * 
 */
app.listen(PORT, () => console.log(`Express Servert is Started at Port No:${PORT}`));