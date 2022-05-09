const express = require('express');
const route = express.Router();

const studentsController = require('../../app/controllers/StudentsController');

route.get('/create', studentsController.create);
route.get('/:id/edit', studentsController.edit);
route.get('/:slug', studentsController.show);
route.get('', studentsController.students);

route.post('/store', studentsController.store);
route.post('/handlebar-formAction', studentsController.handlebarFormAction);

route.put('/:id', studentsController.update);
route.patch('/:id', studentsController.restore);

route.delete('/:id/force', studentsController.forceDelete);
route.delete('/:id', studentsController.delete);
    
module.exports = route;
