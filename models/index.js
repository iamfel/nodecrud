const mongoose = require('mongoose');

//the password support to be in .env variables... 
//but i will just use it drict for now. 
const url = `mongodb+srv://bashirsidi:bashirsidi@cluster0.u9fby.mongodb.net/crudapp?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}

mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Database connected successfully...')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

mongoose.Promise = Promise;
module.exports.User = require('./user');