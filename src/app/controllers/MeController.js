const Students = require('../models/Students');
const { multipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    // [GET] me/stored-students
    storedStudents(req, res, next) {
        Students.find({})
            .then(students => res.render("body/me/stored-students", {
                students: multipleMongooseToObject(students)
            }))
            .catch(next);
    }
}

module.exports = new MeController();
