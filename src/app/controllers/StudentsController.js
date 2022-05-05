const Students = require('../models/Students');
const { mongooseToObject } = require('../../util/mongoose');

class StudentsController {

    // [GET] /students/:slug
    show(req, res, next) {
        Students.findOne()
            .then(student => {
                res.render('body/student/show',{
                    slug: req.params.slug,
                });
            })
            .catch(next);
    }

    // [POST] /students/create
    create(req, res, next) {
        res.render('body/student/create');
    }

    // [GET] /students/:id/edit
    edit(req, res, next) {
        Students.findById(req.params.id)
            .then((student) => {
                res.render('body/student/edit', {
                    student: mongooseToObject(student),
                });
            })
            .catch(next);
        
    }
    
    store(req, res, next) {
        // res.json(req.body);
        const formData = req.body;
        formData.image = 'https://i.pinimg.com/564x/e7/2e/85/e72e8598bd95b5b77da1f41cb4d7109a.jpg';
        const students = new Students(formData);
        students.save()
            .then(() => res.redirect('/'));
        
    }

    //[PUT] /students/:id
    update(req, res, next) {
        Students.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/'))
            .catch(next);
    }

    // [DELETE] /students/:id
    delete(req, res, next) {
        Students.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
        
    }
}

module.exports = new StudentsController();
