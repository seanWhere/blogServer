const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);


const Schema = mongoose.Schema;

const Students = new Schema({
    _id: { type: Number},
    name: {type: String, default: ''},
    age: { type: Number, match: /[1-100]/ },
    address: { type: String, default: 'Phú Yên' },
    image: { type: String, default: 'None' },
    slug: {type: String, slug: 'name', unique: true},
}, {
    _id: false,
    timestamps: true,
});

// add plugin
mongoose.plugin(slug);
Students.plugin(AutoIncrement);
Students.plugin(mongooseDelete, {
    deletedAt : true,
    overrideMethods: 'all'
});

module.exports = mongoose.model('Students', Students);