const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const user = process.env.DBUSER;
const password = process.env.DBPASSWORD;
const dbname = process.env.DBNAME;

const url = `mongodb+srv://${user}:${password}@cluster0.dsona.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(url, { useNewUrlParser: true })
    .then(() => {
        console.info("NODEJS TO MONGODB CONNECTION ESTABLISH.......")
    })
    .catch((err) => {
        console.error('Connection Error:', err);
        console.error('Customize Error:' + JSON.stringify(err, undefined, 2));
        process.exit();
    });

module.exports = mongoose;



