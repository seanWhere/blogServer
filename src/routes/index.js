const studentRouter = require('./body/student');
const meRouter = require('./body/me');

function route(app) {
    app.use('/me', meRouter);

    app.use('/students', studentRouter);
    
    app.use('/', studentRouter);
}

module.exports = route;
