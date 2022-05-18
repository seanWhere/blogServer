const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const { engine } = require('express-handlebars');
const { Dirent } = require('fs');
const route = require('./routes');
const methodOverride = require('method-override');
const db = require('./config/db');
const port = 3000;

const sortMiddleware = require('./app/middleware/SortMiddleware');

// HTTP Logger
// app.use(morgan('combined'));

// define the path
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// template engine
app.engine(
    '.hbs',
    engine({
        extname: '.hbs',
        helpers: require('./config/handlerbarHelper'),
    }),
);

db.connect();

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.use(methodOverride('_method'));

app.use(saver);

// custom middleware
function saver(req, res, next) {
    // logins,...
    next();
};

app.use(sortMiddleware);


// app.get('/middleware',
//     function (req, res, next) {
//         if (['first', 'second'].includes(req.query.type)) {
//             req.type = 'Oke';
//             return next();
//         }
//         else {
//             res.json({
//                 message: 'You have error',
//             })
//         }
//     },
//     function (req, res, next) {
//         res.json({
//             message: 'You are ready',
//             type: req.type,
//         })
//     }
// );

// route init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
