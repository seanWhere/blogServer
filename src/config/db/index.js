const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/data_dev');
        console.log("connect to success!!");
    } catch (error) {
        console.log("connect to failure!!");
        console.log(error);
    }
}

module.exports = {connect};