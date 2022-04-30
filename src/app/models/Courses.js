const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Courses = new Schema({
    name: {type: String, default: ''},
    age: { type: Number, match: /[1-100]/ },
    address: { type: String, default: 'Phú Yên' },
    creatAt: { type: Date, default: Date.now },   
    updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Courses', Courses);