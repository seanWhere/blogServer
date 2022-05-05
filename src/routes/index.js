const newsRouter = require('./body/news');
const siteRouter = require('./body/site');
const studentRouter = require('./body/student');
const meRouter = require('./body/me');

function route(app) {
    app.use('/news', newsRouter);

    app.use('/me', meRouter);

    app.use('/students', studentRouter);
    
    app.use('/', siteRouter);
}

module.exports = route;
