const Students = require('../models/Students');
const { mongooseToObject, multipleMongooseToObject } = require('../../util/mongoose');

class StudentsController {

    students(req, res, next) {
        Students.find({})
        //  Có thể dùng Student.find({}).lean()
            .then(Students => res.render('body/home', {
                Students: multipleMongooseToObject(Students)
            }))
            .catch(next);
    }
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
        Students.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);        
    }

    // [DELETE] /students/:id/force
    forceDelete(req, res, next) {
        Students.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);        
    }    

    // [PATCH] /students/:id
    restore(req, res, next) {
        Students.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [POST] /students/handlebar-formAction
    handlebarFormAction(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                Students.delete({ _id: req.body.ids })
                // Students.delete({ _id: { $in: req.body.ids} })
                    .then(() => res.redirect('back'))
                    .catch(next); 
                break;
            case 'restore':
                Students.restore({ _id: req.body.ids })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            case 'forceDelete':
                Students.deleteMany({ _id: req.body.ids })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            default:
                res.send(req.body); 
                
        }
    }
}

module.exports = new StudentsController();
