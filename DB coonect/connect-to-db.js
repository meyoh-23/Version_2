require('dotenv').config();
const mongoose = require('mongoose');

const connectionString = process.env.DB_CONNECT;
/* console.log(connectionString); */

connectDB = mongoose.connect(connectionString,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
        useCreateIndex: true
    })
    .then(
        console.log('Connected to Compass Database')
    )
    .catch((error) => console.log(error));

module.exports = connectDB;
