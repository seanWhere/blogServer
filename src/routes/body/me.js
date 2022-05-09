const express = require('express');
const route = express.Router();

const meController = require('../../app/controllers/meController');

route.get('/stored/students', meController.storedStudents);
route.get('/trash/students', meController.trashStudents);
    
module.exports = route;
