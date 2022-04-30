const Courses = require('../models/Courses');

class SiteController {
    index(req, res) {
        res.render('body/home');
    }

    Courses(req, res) {
        Courses.find({}, function (err, course) {
            if (!err) {
                res.json(course);
            }
            else res.status(500).json({ error: 'message' });
        });
    }

    search(req, res) {
        res.render('body/search');
    }
}

module.exports = new SiteController();
