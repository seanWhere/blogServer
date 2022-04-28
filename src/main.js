const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const {engine}  = require('express-handlebars');
const { Dirent } = require('fs');
const route = require('./routes');
const port = 3000;

// HTTP Logger
// app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// template engine
app.engine('.hbs', engine({
    extname: '.hbs'
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, './resources/views'));

// route init
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})