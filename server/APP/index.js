const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const dbconnection = require('../DATABASES/DBConnect.Mongo')
const UserRoutes = require('../ROUTERS/user.routes')
const PostRoutes = require('../ROUTERS/post.routes')
const AdminRoutes = require('../ROUTERS/admin.routes')

dotenv.config()
const PORT = process.env.PORT;

const app = express();
app.use(cors())
app.use(express.json())


app.use('/user', UserRoutes);
app.use('/post', PostRoutes);
app.use('/admin', AdminRoutes);

if (dbconnection) {
    app.listen(PORT, () => console.log(`Express Servert is Started at Port No:${PORT}`));
} else {
    console.error('Database Connection Error');
}

