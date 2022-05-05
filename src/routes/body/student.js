const express = require('express');
const route = express.Router();

const studentsController = require('../../app/controllers/StudentsController');

route.get('/create', studentsController.create);
route.post('/store', studentsController.store);
route.get('/:id/edit', studentsController.edit);
route.put('/:id', studentsController.update);
route.delete('/:id', studentsController.delete);
route.get('/:slug', studentsController.show);
    
module.exports = route;
