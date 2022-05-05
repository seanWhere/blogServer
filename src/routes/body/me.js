const express = require('express');
const route = express.Router();

const meController = require('../../app/controllers/meController');

route.get('/stored-students', meController.storedStudents);
    
module.exports = route;
