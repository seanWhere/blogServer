const Students = require('../models/Students');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {

    Students(req, res, next) {
        Students.find({})
        //  Có thể dùng Student.find({}).lean()
            .then(Students => res.render('body/home', {
                Students: multipleMongooseToObject(Students)
            }))
            .catch(next);
    }

    search(req, res) {
        res.render('body/search');
    }
}

module.exports = new SiteController();
