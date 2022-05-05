module.exports = {
    multipleMongooseToObject: function (mongooseDatas) {
        return mongooseDatas.map(mongoose => mongoose.toObject());
    },
    mongooseToObject: function (mongoese) {
        return mongoese ? mongoese.toObject() : mongoese;
    }
}