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

// route init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
