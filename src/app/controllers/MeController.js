const Students = require('../models/Students');
const { multipleMongooseToObject } = require('../../util/mongoose');
const { find } = require('../models/Students');

function sortData(req, res, handler) {
    let studentQuery = handler;
    if (req.query.hasOwnProperty('_sort')) {
            studentQuery = studentQuery.sort({
                [req.query.column]: req.query.type,
            });
    }
    return studentQuery;
}

class MeController {
    // [GET] me/stored/students
    storedStudents(req, res, next) {
        // res.json(res.locals._sort);
        // let studentQuery = Students.find();

        // if (req.query.hasOwnProperty('_sort')) {
        //     studentQuery = studentQuery.sort({
        //         [req.query.column]: req.query.type,
        //     });
        // }

        // Promise.all([Students.find(), Students.countDocumentsDeleted()])
        // Promise.all([studentQuery, Students.countDocumentsDeleted()]) 
        Promise.all([sortData(req, res, Students.find()), Students.countDocumentsDeleted()])
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
        sortData(req, res, Students.findDeleted())
        // Students.findDeleted({})             
            .then(students => res.render("body/me/trash-students", {
                students: multipleMongooseToObject(students)
            }))
            .catch(next);
    }
}

module.exports = new MeController();
