const Students = require('../models/Students');
const { multipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    // [GET] me/stored/students
    storedStudents(req, res, next) {
        Promise.all([Students.find(), Students.countDocumentsDeleted()])
            .then(([students, deletedCount]) =>
                res.render("body/me/stored-students", {
                    deletedCount,
                    students: multipleMongooseToObject(students)
                })
            )
            .catch(next);
    }

    // [GET] me/trash/students
    trashStudents(req, res, next) {
        Students.findDeleted({})
            .then(students => res.render("body/me/trash-students", {
                students: multipleMongooseToObject(students)
            }))
            .catch(next);
    }
}

module.exports = new MeController();
